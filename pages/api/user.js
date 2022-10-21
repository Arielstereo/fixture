import dbConnection from "../../utils/database";
import User from "../../models/Users";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnection();

  if (method === "POST") {
    try {
      const user = await new User(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400);
    }
  }
}
