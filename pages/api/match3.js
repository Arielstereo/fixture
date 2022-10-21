import dbConnection from '../../utils/database';
import Match3 from '../../models/Match3';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await new Match3(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400);
    }
  }
}