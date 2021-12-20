const calculateTimeLeft = () => {
  let difference = +new Date(`2021-11-21`) - +new Date();

  //add offset to hours => to get user's local time
  const offset = +new Date().getTimezoneOffset() / 60;

  // console.log(typeof offset);
  // console.log(offset);
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60) + offset) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  // Clear timeout if the component is unmounted
  return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

{
  timerComponents.length ? timerComponents : <span>Time's up!</span>;
}
