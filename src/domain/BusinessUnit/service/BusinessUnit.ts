/**
 * Entities
 */

import BusinessUnit from '../entity/BusinessUnit'

/**
 * Repositories
 */
import IBusinessUnitRepository from '../repository/IBusinessUnitRepository'
import BusinessUnitRepository from '../repository/BusinessUnit'

export default class BusinessUnitService {
  private repository: IBusinessUnitRepository

  constructor (repository?: IBusinessUnitRepository) {
    this.repository = repository || new BusinessUnitRepository()
  }

  public getAll (): BusinessUnit[] {
    return this.repository.getAll()
  }

  public getByIdList (businessUnitsIds?: string[]): BusinessUnit[] {
    const filterById = (businessUnit: BusinessUnit) => {
      return businessUnitsIds?.includes(businessUnit?.id)
    }

    return this.repository.getAll().filter(filterById)
  }
}
