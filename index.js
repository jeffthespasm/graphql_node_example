const express = require('express')
const graphqlHTTP = require('express-graphql')
const axios = require('axios')
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return new Promise((resolve, reject) => {
            axios.get('http://localhost:4002/bar')
              .then((res) => {
                resolve(res.data)
              })
          })
        }
      },
      foo: {
        type: GraphQLString,
        resolve() {
          return new Promise((resolve, reject) => {
            axios.get('http://localhost:4001/foo')
              .then((res) => {
                resolve(res.data)
              })
          })
        }
      }
    }
  })
});

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(4000)
console.log('listining on 4000')
