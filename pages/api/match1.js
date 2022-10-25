import dbConnection from '../../utils/database';
import Match1 from '../../models/Match1';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await Match1.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}