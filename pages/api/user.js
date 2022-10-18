import dbConnection from '../../utils/database';
import User from '../../models/Users';

export default async function handler(req,res) {
  const {method} = req;
  await dbConnection();

  if (method === 'POST') {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      console.log(error)
    }
  }
}