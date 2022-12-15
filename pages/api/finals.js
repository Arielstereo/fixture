import dbConnection from '../../utils/database';
import Finals from '../../models/Finals';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await Finals.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400)
    }
  }
}