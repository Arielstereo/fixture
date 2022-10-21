import dbConnection from '../../utils/database';
import Match2 from '../../models/Match2';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await new Match2(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400);
    }
  }
}