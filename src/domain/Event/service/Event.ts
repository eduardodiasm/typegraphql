/**
 * Entities
 */

import Event from '../entity/Event'
import EventInput from '../entity/input/Event'
import BusinessUnit from '@domain/BusinessUnit/entity/BusinessUnit'

/**
 * Repositories
 */

import EventRepository from '../repository/Event'
import IEventRepository from '../repository/IEventRepository'
import BusinessUnitService from '@domain/BusinessUnit/service/BusinessUnit'

export default class EventService {
  private repository: IEventRepository
  private defaultOrganizationId: string = '61462a07fdf5950b0a6aa871'

  constructor (repository?: IEventRepository) {
    this.repository = repository || new EventRepository()
  }

  public createEvent (eventProps: EventInput): Event {
    /**
     * Setando organizationId na mão,
     * ideal seria setar por authHeader.organizationId
     */

    eventProps.organizationId = this.defaultOrganizationId ||
      this.repository.generateId()

    const event = new Event(eventProps)

    return this.repository.save(event)
  }

  public getEventBusinessUnits (event: Event): BusinessUnit[] {
    return new BusinessUnitService().getByIdList(event.businessUnitsIds)
  }

  public getAll (): Event[] {
    return this.repository.getAll()
  }
}
