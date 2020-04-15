var express = require('express');
var graphqlHTTP = require('express-graphql');
require('./database')

const schemas = require('./schemas')
const resolvers = require('./resolvers')

var app = express();


app.use('/graphql', graphqlHTTP({
    schema: schemas,
    rootValue: resolvers,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');