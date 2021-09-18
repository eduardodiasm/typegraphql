import { Resolver, Query } from 'type-graphql'

import BusinessUnit from '@domain/BusinessUnit/entity/BusinessUnit'
import BusinessUnitService from '@domain/BusinessUnit/service/BusinessUnit'

@Resolver(BusinessUnit)
export default class EventResolver {
  private service = new BusinessUnitService()

  @Query(() => [BusinessUnit])
  async businessUnits (): Promise<BusinessUnit[]> {
    return this.service.getAll()
  }
}
