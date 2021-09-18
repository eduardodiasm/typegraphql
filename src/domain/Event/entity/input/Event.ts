import { MaxLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'

import 'reflect-metadata'

@InputType()
export default class EventInput {
  @Field({ nullable: true })
  organizationId: string

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(20)
  url: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String])
  businessUnitsIds: string[]
}
