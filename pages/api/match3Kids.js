import dbConnection from '../../utils/database';
import Match3Kids from '../../models/Match3Kids';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await Match3Kids.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400)
    }
  }
}