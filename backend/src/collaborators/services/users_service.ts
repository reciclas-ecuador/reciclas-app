import { type UpdateUser, type CreateUser, type UserEcoEquivalences } from './../types/users.d'
/**
 * This file is use for bussiness logic
 * Here you can use prisma client to interact with database
 *
*/

import { type PrismaClient, type Collaborator } from '@prisma/client'
import boom from '@hapi/boom'
import { transformEcoEquivalences } from '../../../libs/ecoequivalences'
import prisma from '../../../libs/prismadb'

export default class UsersService {
  private readonly prisma: PrismaClient = prisma

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

  async getOneByCi(ci: string): Promise<Collaborator> {
    const user = await this.prisma.collaborator.findFirst({
      where: { ci }
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

  async softRemove(email: string): Promise<Collaborator> {
    const user = await this.prisma.collaborator.findFirst(
      { where: { email } }
    )

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    return await this.prisma.collaborator.update({
      where: { email },
      data: { status: 'inactive' }
    })
  }

  async remove(email: string): Promise<Collaborator> {
    const user = await this.prisma.collaborator.findFirst(
      { where: { email } }
    )

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }

    const deleteLogActions = this.prisma.logActionsCollaborator.deleteMany({
      where: { collaboratorEmail: email }
    })

    const deleteUser = this.prisma.logActionsCollaborator.deleteMany({
      where: { collaboratorEmail: email }
    })

    const [rtaLogActions, rtaUser] = await this.prisma.$transaction([deleteLogActions, deleteUser])

    if (rtaLogActions.count === 0 || rtaUser.count === 0) {
      throw boom.badImplementation('Error deleting user')
    }

    return user
  }

  async getEcoEquivalences(email: string): Promise<UserEcoEquivalences> {
    const user = await this.prisma.collaborator.findFirst({
      where: { email },
      include: { logActionCollaborators: true }
    })

    if (user === null) {
      throw boom.notFound('Collaborator not found')
    }
    const { logActionCollaborators, ...restOfUser } = user
    const totalRecycled = logActionCollaborators.reduce(
      (acc, curr) => acc + Number(curr.quantity),
      0
    )

    // we are supposed totalRecycled is in kg
    return {
      user: restOfUser,
      ecoEquivalences: transformEcoEquivalences(totalRecycled)
    }
  }
}
