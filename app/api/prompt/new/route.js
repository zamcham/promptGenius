import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (req) => {
    const { prompt, userId, tag } = req.json();

    try {
        await connectToDB();

    } catch (error) {
        
    }
}