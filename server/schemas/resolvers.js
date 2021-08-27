const { Book, User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },
    books: async (parent, { userId }) => {
      return await Book.find({ userId }).populate("books").populate({
        path: "books",
        populate: "author",
      });
    },
  },

  Mutation: {
    addUser: async (parent, { body }) => {
      return await User.create(body);
    },
    saveBook: async (parent, { user, book }) => {
      return await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: book } },
        { new: true, runValidators: true }
      );
    },
    deleteBook: async (parent, { user, params }) => {
      return await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
