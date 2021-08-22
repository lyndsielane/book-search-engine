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
    books: [Book]
    users: [User]
  }
`;

module.exports = typeDefs;
