import { Resolver, Mutation, Arg, Query, FieldResolver, Root } from 'type-graphql'

import Event from '@domain/Event/entity/Event'
import EventInput from '@domain/Event/entity/input/Event'
import EventService from '@domain/Event/service/Event'
import BusinessUnit from '@domain/BusinessUnit/entity/BusinessUnit'

@Resolver(Event)
export default class EventResolver {
  private service = new EventService()

  @FieldResolver()
  businessUnits (@Root() event: Event): BusinessUnit[] {
    return this.service.getEventBusinessUnits(event)
  }

  @Query(() => [Event])
  async events (): Promise<Event[]> {
    return this.service.getAll()
  }

  @Mutation(() => Event)
  async createEvent (@Arg('input') eventInput: EventInput): Promise<Event> {
    return this.service.createEvent(eventInput)
  }
}
