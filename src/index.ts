import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import userResolvers from './domain/Event/resolver'

import 'reflect-metadata'

const main = async () => {
  await createConnection()

  const schema = await buildSchema({
    resolvers: userResolvers
  })

  const apolloServer = new ApolloServer({ schema })
  await apolloServer.start()

  const app = Express()
  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => { console.log(':)') })
}

main()
