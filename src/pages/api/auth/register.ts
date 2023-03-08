import sql from "@/util/database";
import { returnApiError } from "@/util/returnApiError";
import { NextApiRequest, NextApiResponse } from "next";

const isValidDetails = (user: any): boolean => {
  const undefinedProperty = Object.entries(user).find((userEntries: any) => {
    return userEntries[1] === undefined || userEntries[1].length === 0;
  });

  if (undefinedProperty === undefined) return true;

  return false;
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return returnApiError(res, "This API url is meant only for registering.");

  try {
    const { user } = req.body;

    if (!user || !isValidDetails(user))
      return returnApiError(
        res,
        "No valid user object was found in the request."
      );

    const insertUserQuery =
      await sql`INSERT INTO users(username, password, email) VALUES(${user.username}, ${user.password}, ${user.email})`;

    console.log(insertUserQuery);
    return res.status(200).json({});
  } catch (e: any) {
    return returnApiError(res, e.toString());
  }
}
