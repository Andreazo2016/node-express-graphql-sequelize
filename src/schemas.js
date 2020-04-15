const { buildSchema } = require('graphql');

var schemas = buildSchema(`

    input UserInput{
        name:String,
        address:AddressInput
    }

    input AddressInput{
        street:String,
        number:Int
    }

    type Address{
        street:String!,
        number:String!
    }
    type User {
        id:Int!,
        name:String!
        address:Address
    }

    type Query {
        hello: String!,
        users:[User!]!,
        userById(id:Int):User,
        addressOfUser(id:Int):User,
        usersWithAddress:[User],
    }

    type Mutation{
        addUser(input:UserInput):User
    }
`);

module.exports = schemas
