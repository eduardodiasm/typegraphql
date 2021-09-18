import { Resolver, Mutation, Arg, Query } from 'type-graphql'

import Event from '../entity/Event'
import EventInput from '../entity/input/Event'

@Resolver(Event)
export default class CreateResolver {
  @Query(() => String)
  async hello () {
    return 'Hello World!'
  }

  @Mutation(() => Event)
  async create (@Arg('input') eventInput: EventInput): Promise<Event> {
    const event = new Event(eventInput)
    return event
  }
}
