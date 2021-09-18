import Event from '../entity/Event'
import IEventRepository from './IEventRepository'
import { ObjectId } from 'mongodb'

export default class EventRepository implements IEventRepository {
  public data: Event[] = []

  public save (event: Event): Event {
    event.id = this.generateId()
    this.data.push(event)
    return event
  }

  public getAll (): Event[] {
    return this.data
  }

  public generateId (): string {
    return new ObjectId().toHexString()
  }
}
