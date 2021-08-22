const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Book {
  bookId: ID
  author: String
  description: String
  image: String
  link: String
  classes: [Class]
}

type User {
    username: String
    email: String
    password: String
    classes: [Class]
};

module.exports = typeDefs;
