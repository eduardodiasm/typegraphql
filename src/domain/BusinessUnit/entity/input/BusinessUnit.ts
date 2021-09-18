import { Field, InputType } from 'type-graphql'

import 'reflect-metadata'

@InputType()
export default class BusinessUnitInput {
  @Field()
  name: string

  @Field()
  level: number

  @Field({ nullable: true })
  code?: string

  @Field({ nullable: true })
  organizationId: string

  @Field({ nullable: true })
  id: string
}
