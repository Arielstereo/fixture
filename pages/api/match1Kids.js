import dbConnection from '../../utils/database';
import Match1Kids from '../../models/Match1Kids';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await Match1Kids.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400)
    }
  }
}