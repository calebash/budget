import { NextApiResponse } from "next";

export const returnApiError = (res: NextApiResponse, message: string) => {
  if (!res || !message) return;

  res.status(400).json({
    error: true,
    message,
  });
};
