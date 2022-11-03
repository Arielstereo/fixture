import dbConnection from "../../utils/database";
import Kid from "../../models/Kids";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnection();

  if (method === "POST") {
    try {
      const kid = await Kid.create(req.body);
      res.status(200).json(kid);
    } catch (error) {
      res.status(400)
    }
  }
}
