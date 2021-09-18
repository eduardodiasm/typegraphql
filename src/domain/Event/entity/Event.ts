import { ObjectType, Field, ID } from 'type-graphql'
import EventInput from './input/Event'

@ObjectType()
export default class EventEntity {
  constructor (props: EventInput) {
    this.name = props.name
    this.url = props.url
    this.description = props.description
    this.organizationId = props.organizationId
    this.businessUnitsIds = props.businessUnitsIds
  }

  @Field(() => ID)
  id: string;

  @Field(() => ID)
  organizationId: string

  @Field()
  name: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [ID])
  businessUnitsIds?: string[]
}
