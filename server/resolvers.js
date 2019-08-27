import { tasks } from './sample';
import User from './models/User';

export const resolvers = {
  Query: {
    hello: () => 'Hello world',
    greeting: (root, { name }, { messageId }) => `Hello ${messageId}`,
    tasks: () => tasks,
    getUsers: async() => await User.find(),
  },
  Mutation: {
    createTask: (_, { task }) => {
      tasks.push(task);
      task._id = tasks.length-1;
      return task
    },
    createUser: async (_, { user }) => {
      const newUser = new User(user);
      const savedUser = await newUser.save();
      return savedUser;
    },
    deleteUser: async (_, { userId }) => await User.findByIdAndDelete({ _id: userId }),
    updateUser: async (_, { userId, user }) => await User.findByIdAndUpdate(userId, user, { new: true }),
  }
};