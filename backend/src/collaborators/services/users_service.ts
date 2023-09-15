import { type UpdateUser, type CreateUser } from './../types/users.d'
/**
 * This file is use for bussiness logic
 * Here you can use prisma client to interact with database
 *
*/

import { PrismaClient, type Collaborator } from '@prisma/client'
import boom from '@hapi/boom'

export default class UsersService {
  private readonly prisma: PrismaClient = new PrismaClient()

  async getAll(): Promise<Collaborator[]> {
    return await this.prisma.collaborator.findMany()
  }

  async getOne(email: string): Promise<Collaborator> {
    const user = await this.prisma.collaborator.findFirst({
      where: { email }
    })

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    return user
  }

  async create(body: CreateUser): Promise<Collaborator> {
    return await this.prisma.collaborator.create({ data: body })
  }

  async update(email: string, body: UpdateUser): Promise<Collaborator> {
    const user = await this.prisma.collaborator.findFirst(
      { where: { email } }
    )

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    return await this.prisma.collaborator.update({
      where: { email },
      data: body
    })
  }

  async remove(email: string): Promise<Collaborator> {
    const user = await this.prisma.collaborator.findFirst(
      { where: { email } }
    )

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    return await this.prisma.collaborator.delete({ where: { email } })
  }

  async getEcoEquivalences(email: string): Promise<number> {
    const user = await this.prisma.collaborator.findFirst({
      where: { email },
      include: { logActionCollaborators: true }
    })

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    const totalRecycled = user.logActionCollaborators.reduce(
      (acc, curr) => acc + Number(curr.quantity),
      0
    )

    return totalRecycled
  }

  private async getTotalRecycledByUser(email: string): Promise<number> {
    const user = await this.prisma.collaborator.findFirst({
      where: { email },
      include: { logActionCollaborators: true }
    })

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    console.log(user)

    return 0
  }
}
