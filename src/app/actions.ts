"use server";

export async function updateUser(userID: string, ...args: any[]) {
  console.log(args);
  console.log("get userID", userID);
  return { u: userID };
}
