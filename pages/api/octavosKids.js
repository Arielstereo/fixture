import dbConnection from '../../utils/database';
import OctavosKids from '../../models/OctavosKids';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const result = await OctavosKids.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400)
    }
  }
}