// import { prisma } from "../../server";

//async function that returns promise: an arr consisting of objects with name and birthdayDate
export const getBDay = async (
  workspaceId: string
): Promise<
  {
    name: string | null;
    birthdayDate: Date;
  }[]
> => {
  const birthdays: {
    name: string | null;
    birthdayDate: Date;
  }[] = await prisma.slackAuthEntry.findMany({
    where: {
      id: workspaceId,
    },
    select: {
      name: true,
      birthdayDate: true,
    },
    orderBy: [
      {
        birthdayDate: "asc",
      },
    ],
  });

  if (!birthdays) {
    throw new Error("Birthday info not found");
  }

  return birthdays;
};
