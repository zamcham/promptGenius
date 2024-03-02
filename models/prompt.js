import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Please add a prompt'],
    },
    tag: {
        type: String,
        required: [true, 'Please add a tag'],
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;