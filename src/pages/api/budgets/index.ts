import { NextApiRequest, NextApiResponse } from "next";
import budgets from "../../../sample/budgets.json";

async function getBudgets() {
  return budgets;
}

export default async function budgetsApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") return;

  try {
    const _budgets = await getBudgets();
    res.status(200).json({ budgets: _budgets });
  } catch (e: any) {
    return res.status(400).json({ error: true, message: e.toString() });
  }
}
