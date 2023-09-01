import { type CreateCollaborator } from '../models/collaborator_model'
/**
 * This file is use for bussiness logic
 * Here you can use prisma client to interact with database
 *
*/

import { PrismaClient, type Collaborator } from '@prisma/client'
import boom from '@hapi/boom'

export default class CollaboratorsService {
  private readonly prisma: PrismaClient = new PrismaClient()

  async getAll(): Promise<Collaborator[]> {
    return await this.prisma.collaborator.findMany()
  }

  async getOne(id: number): Promise<Collaborator> {
    const collaborator = await this.prisma.collaborator.findFirst({
      where: { id }
    })

    if (collaborator === null) {
      throw boom.notFound('Collaborator not found')
    }

    return collaborator
  }

  async create(body: CreateCollaborator): Promise<Collaborator> {
    return await this.prisma.collaborator.create({ data: body })
  }

  async update(id: number, body: CreateCollaborator): Promise<Collaborator> {
    const collaborator = await this.prisma.collaborator.findFirst(
      { where: { id } }
    )

    if (collaborator === null) {
      throw boom.notFound('Collaborator not found')
    }

    return await this.prisma.collaborator.update({
      where: { id },
      data: body
    })
  }

  async remove(id: number): Promise<Collaborator> {
    const collaborator = await this.prisma.collaborator.findFirst(
      { where: { id } }
    )

    if (collaborator === null) {
      throw boom.notFound('Collaborator not found')
    }

    return await this.prisma.collaborator.delete({ where: { id } })
  }
}
