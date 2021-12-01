//* Receiving the submission from "Request Time Off Hours" -> HOURLY timeoff request
app.view<ViewSubmitAction>(
    { callback_id: 'callback_request_timeoff_hours' },
    async ({ ack, body, context, client, payload }) => {
      const values = payload.state.values;
      const slackUserId: string = body.user.id;
      const workspaceId: string = context.teamId ?? '';
  
      // Input validation for TypeScript
      if (!values.request_start_hour.request_time_picker_action.selected_time) {
        throw new Error('callback_request_timeoff_hours has no input');
      } else if (!values.request_end_hour.request_time_picker_action.selected_time) {
        throw new Error('callback_request_timeoff_hours has no input');
      } else if (!values.request_start_date.request_date_picker_action.selected_date) {
        throw new Error('callback_request_date_picker_action has no input');
      } else if (!values.request_type.request_type_action.selected_option) {
        throw new Error('callback_request_type has no input');
      } else if (!values.request_type.request_type_action.selected_option?.value) {
        throw new Error('callback_request_type has no input');
      } else if (!values.request_mode.request_mode_action.selected_option) {
        throw new Error('callback_request_mode has no input');
      } else if (!values.request_mode.request_mode_action.selected_option?.value) {
        throw new Error('callback_request_mode has no input');
      }
  
      /************************************************
       * Parsing information from the user
       ************************************************/
  
      // Getting the Time information from the modal
      // If the user does not input values for start and end hour, we will set it to standard working hours
      // When we set up values for workspace-specific working hours, we should set the default values to that instead.
      let selected_start_hour: string = values.request_start_hour
        ? values.request_start_hour.request_time_picker_action.selected_time.split(':')[0]
        : '09';
      if (selected_start_hour.length === 1) {
        selected_start_hour = `0${selected_start_hour}`;
      }
      let selected_start_minute: string = values.request_start_hour
        ? values.request_start_hour.request_time_picker_action.selected_time.split(':')[1]
        : '00';
      if (selected_start_minute.length === 1) {
        selected_start_minute = `0${selected_start_minute}`;
      }
      let selected_end_hour: string = values.request_end_hour
        ? values.request_end_hour.request_time_picker_action.selected_time.split(':')[0]
        : '17';
      if (selected_end_hour.length === 1) {
        selected_end_hour = `0${selected_end_hour}`;
      }
      let selected_end_minute: string = values.request_end_hour
        ? values.request_end_hour.request_time_picker_action.selected_time.split(':')[1]
        : '00';
      if (selected_end_minute.length === 1) {
        selected_end_minute = `0${selected_end_minute}`;
      }
  
      const start_hour: number = parseInt(selected_start_hour, 10);
      const start_minute: number = parseInt(selected_start_minute, 10);
      const end_hour: number = parseInt(selected_end_hour, 10);
      const end_minute: number = parseInt(selected_end_minute, 10);
  
      // Getting the Date information from the modal
      const requestDate: string = values.request_start_date.request_date_picker_action.selected_date; // "2021-11-17"
  
      // Time Zones with Luxon
      const today: Date = new Date();
      const timeZone: string = await utils.getUsersTimeZone(client, body.user.id);
      const year: number = parseInt(requestDate.split('-')[0]);
      const month: number = parseInt(requestDate.split('-')[1]);
      const date: number = parseInt(requestDate.split('-')[2]);
  
      // For Data Validation
      const startDateTime: DateTime = utils.convertUserTimeToDateTime(
        timeZone,
        year,
        month,
        date,
        start_hour,
        start_minute,
      );
      const endDateTime: DateTime = utils.convertUserTimeToDateTime(timeZone, year, month, date, end_hour, end_minute);
  
      // Actual stored information in UTC
      const start_date: Date = new Date(`${requestDate}T${selected_start_hour}:${selected_start_minute}:00`); // returns in format YYYY-MM-DDTHH:MM:SS.369Z
      const end_date: Date = new Date(`${requestDate}T${selected_end_hour}:${selected_end_minute}:00`); // returns in format YYYY-MM-DDTHH:MM:SS.369Z
  
      // Getting the Time Off Type
      const type_of_timeoff: number = Number(values.request_type.request_type_action.selected_option.value); // "1"
  
      //* Getting the Paid Time Off Mode
      // Check the value of the mode and setting the appropiate boolean value
      let is_time_off_paid: boolean = false; // false - unpaid, true - paid
      const selected_mode: number = parseInt(values.request_mode.request_mode_action.selected_option.value); // '1' or '0'
      let requested_hours: number = end_hour - start_hour;
      if (selected_mode === 1) {
        is_time_off_paid = true;
      }
  
      const reason_for_timeoff: string = values.request_reason.request_reason_input.value || 'No reason provided'; // "some random information"
      const time_off_status = 0; // 0 = Waiting/Pending
      let pto_hours: number = parseInt(payload.blocks[5].block_id.split(':')[1]);
      const currentDateTimeInUTC: DateTime = DateTime.now();
  
      // Make sure selected start date is not in the past
      if (startDateTime.toUTC() < currentDateTimeInUTC) {
        await ack({
          response_action: 'errors',
          errors: {
            request_start_date: `Start date cannot be in the past`,
            request_start_hour: `Start hour cannot be in the past`,
          },
        });
        return;
      }
      // Validate if the end hour is greater than or equal to the start hour
      else if (end_hour < start_hour) {
        await ack({
          response_action: 'errors',
          errors: {
            request_end_hour: `Select an end hour greater than the start hour`,
          },
        });
        return;
      }
      // Check if the request mode is paid or unpaid
      else if (is_time_off_paid === true) {
        // If the remaining PTO values are less than the time difference of the request then prevent user from submitting
        if (requested_hours > pto_hours) {
          await ack({
            response_action: 'errors',
            errors: {
              request_end_hour: `You do not have enough PTO hours to make this request.`,
            },
          });
          return;
        }
      }
  
      const time_of_request_hours: createTimeOffRequest = {
        slackUserId,
        workspaceId,
        start_date,
        end_date,
        type_of_timeoff,
        is_time_off_paid,
        reason_for_timeoff,
        time_off_status,
        requested_hours,
      };
  
      // Data Submission
      await ack();
      try {
        await functions.timeRequests.submitRequestTimeOff(body, context, client, time_of_request_hours);
        // Update the Home view with the new request
        await functions.viewFunctions.updateUserHomePage(body, context, client);
      } catch (error) {
        console.log(error);
      }
    },
  );