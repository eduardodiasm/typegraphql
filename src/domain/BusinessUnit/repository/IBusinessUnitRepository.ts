import BusinessUnit from '../entity/BusinessUnit'

export default interface IBusinessUnitRepository {
  data: BusinessUnit[]
  save(businessUnit: BusinessUnit): BusinessUnit
  getAll(): BusinessUnit[]
  generateId(): string
}
