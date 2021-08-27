const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID
    author: String
    description: String
    image: String
    link: String
  }

  type User {
    username: String
    email: String
    password: String
  }

  type Query {
    user: User
    books(userId: ID!): [Book]
  }

  type Mutation {
    addUser(user: User!): User
    saveBook(user: User!, book: Book!): User
    deleteBook(user: User!, bookId: ID!): User
  }
`;

module.exports = typeDefs;
