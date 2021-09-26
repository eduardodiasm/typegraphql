import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import resolvers from './application/graphql/resolver'

import 'reflect-metadata'

const port: string|number = process.env.PORT || 4000

class Server {
  public static async execute () {
    const schema = await buildSchema({
      resolvers
    })

    const apolloServer = new ApolloServer({ schema })
    await apolloServer.start()

    const app = Express()
    apolloServer.applyMiddleware({ app })

    app.listen(port, () => { console.log(':)') })
  }
}

Server.execute()
