import { ObjectType, Field } from 'type-graphql'
import EventInput from './input/Event'
import BusinessUnit from '@domain/BusinessUnit/entity/BusinessUnit'

@ObjectType()
export default class EventEntity {
  constructor (props: EventInput) {
    this.name = props.name
    this.url = props.url
    this.description = props.description
    this.organizationId = props.organizationId
    this.businessUnitsIds = props.businessUnitsIds
  }

  @Field(({ nullable: true }))
  id?: string;

  @Field()
  organizationId: string

  @Field()
  name: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  description?: string;

  // @Field(() => [String])
  businessUnitsIds?: string[]

  @Field(() => [BusinessUnit])
  businessUnits?: BusinessUnit[]
}
