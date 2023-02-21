import { NextApiRequest, NextApiResponse } from "next";

async function getBudgets() {
  return true;
}

export default async function budgetsApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") return;

  try {
    const response = await getBudgets();
    res.status(200).json({ test: true });
  } catch (e) {
    return res.status(400).json({ error: true });
  }
}
