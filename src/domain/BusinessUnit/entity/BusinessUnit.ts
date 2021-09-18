import { ObjectType, Field } from 'type-graphql'
import BusinessUnitInput from './input/BusinessUnit'

@ObjectType()
export default class BusinessUnit {
  constructor (props: BusinessUnitInput) {
    this.name = props.name
    this.level = props.level
    this.code = props.code
    this.id = props.id
    this.organizationId = props.organizationId
  }

  @Field()
  id: string;

  @Field()
  organizationId: string

  @Field()
  name: string

  @Field()
  level: number

  @Field({ nullable: true })
  code?: string
}
