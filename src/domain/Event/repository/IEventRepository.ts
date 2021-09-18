import Event from '../entity/Event'

export default interface IEventRepository {
  data: Event[]
  save(event: Event): Event
  getAll(): Event[]
  generateId(): string
}
