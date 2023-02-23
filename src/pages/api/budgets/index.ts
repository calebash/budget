import { NextApiRequest, NextApiResponse } from "next";
import budgets from "../../../sample/budgets.json";

async function getBudgets() {
  console.log(budgets);
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
  } catch (e: any) {
    return res.status(400).json({ error: true, message: e.toString() });
  }
}
