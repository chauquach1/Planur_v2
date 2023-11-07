import connectMongoDB from '../../libs/mongo/mongodb.js';
import User from '../../models/user'; 

export default async function handler(req, res) {
  try {
    await connectMongoDB();

    // Extract the UUID from the query parameters
    const { uuid } = req.query;

    if (!uuid) {
      return res.status(400).json({ error: 'UUID parameter is missing' });
    }

    // Fetch the user from the database using the UUID
    const user = await User.findOne({ uuid });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send the user data back in the response
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
