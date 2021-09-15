import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema, Resolver, Query } from 'type-graphql'

import 'reflect-metadata'

@Resolver()
class MockResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello, world!'
  }
}

const main = async () => {

  const schema = await buildSchema({
    resolvers: [MockResolver]
  })
  
  const apolloServer = new ApolloServer({ schema })
  await apolloServer.start()
  
  const app = Express()
  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => { console.log(':)') })

}

main()