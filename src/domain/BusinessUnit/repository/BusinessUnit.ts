import BusinessUnit from '../entity/BusinessUnit'
import IBusinessUnitRepository from './IBusinessUnitRepository'
import { ObjectId } from 'mongodb'

export default class BusinessUnitRepository implements IBusinessUnitRepository {
  public data: BusinessUnit[] = [
    new BusinessUnit({
      name: 'Petz',
      level: 0,
      organizationId: '61462a07fdf5950b0a6aa871',
      id: '51462a07fdf5950b0a6aa871'
    }),
    new BusinessUnit({
      name: 'Abifiqui',
      level: 0,
      organizationId: '61462a07fdf5950b0a6aa871',
      id: '41462a07fdf5950b0a6aa871'
    })
  ]

  public save (businessUnit: BusinessUnit): BusinessUnit {
    businessUnit.id = this.generateId()
    this.data.push(businessUnit)
    return businessUnit
  }

  public getAll (): BusinessUnit[] {
    return this.data
  }

  public generateId (): string {
    return new ObjectId().toHexString()
  }
}
