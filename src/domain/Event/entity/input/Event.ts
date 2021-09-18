import { MaxLength } from 'class-validator'
import { Field } from 'type-graphql'

export default class EventInput {
  @Field()
  organizationId: string

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(20)
  url: string;

  @Field({ nullable: true })
  description?: string;

  @Field(({ nullable: true }))
  businessUnitsIds: string[]
}
