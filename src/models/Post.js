import mongoose from 'mongoose';
export const Post = mongoose.model('Post', { name: String });