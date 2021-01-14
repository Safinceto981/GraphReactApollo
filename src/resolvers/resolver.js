import { Cat } from '../models/Cat'
import { Post } from '../models/Post';
export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: (_, { name }) => {
            const kitty = new Cat({ name });
            return kitty.save();
        }
    }
}


