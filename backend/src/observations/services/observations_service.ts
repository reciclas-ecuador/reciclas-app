import { type Observation } from '@prisma/client'
import boom from '@hapi/boom'
import { type UpdateObservation, type CreateObservation } from '../types/observations'
import client from '../../../libs/prismadb'

export default class ObservationsService {
  private readonly prisma = client

  async getAll(): Promise<Observation[]> {
    return await this.prisma.observation.findMany()
  }

  async getAllByLogActionCollaborator(logActionsCollaboratorId: number): Promise<Observation[]> {
    return await this.prisma.observation.findMany({
      where: { logActionsCollaboratorId }
    })
  }

  async getOne(id: number): Promise<Observation> {
    const observation = await this.prisma.observation.findFirst({
      where: { id }
    })

    if (observation === null) {
      throw boom.notFound('Observation not found')
    }

    return observation
  }

  async create(data: CreateObservation): Promise<Observation> {
    return await this.prisma.observation.create({ data })
  }

  async update(id: number, changes: UpdateObservation): Promise<Observation> {
    const observation = await this.prisma.observation.findFirst({
      where: { id }
    })

    if (observation === null) {
      throw boom.notFound('Observation not found')
    }

    return await this.prisma.observation.update({
      where: { id },
      data: changes
    })
  }

  async remove(id: number): Promise<Observation> {
    const observation = await this.prisma.observation.findFirst({
      where: { id }
    })

    if (observation === null) {
      throw boom.notFound('Observation not found')
    }

    return await this.prisma.observation.delete({ where: { id } })
  }
}
