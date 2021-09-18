import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export default class BusinessUnit {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  organizationId: string

  @Field(() => ID)
  name: string

  @Field()
  level: number

  @Field()
  code: string

  @Field()
  children: string[]
}
