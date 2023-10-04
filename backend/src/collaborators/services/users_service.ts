import { ecoEquivalences } from './../../../libs/ecoequivalences'
import { type UpdateUser, type CreateUser, type UserEcoEquivalences } from './../types/users.d'
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
      ecoEquivalences: {
        totalRecycled: {
          value: Number((totalRecycled * ecoEquivalences.totalRecycled.value).toFixed(2)), // kg
          unit: ecoEquivalences.totalRecycled.unit
        },
        trees: {
          value: Number((totalRecycled * ecoEquivalences.trees.value).toFixed(2)), // trees
          unit: ecoEquivalences.trees.unit
        },
        water: {
          value: Number((totalRecycled * ecoEquivalences.water.value).toFixed(2)), // liters
          unit: ecoEquivalences.water.unit
        },
        energy: {
          value: Number((totalRecycled * ecoEquivalences.energy.value).toFixed(2)), // kWh (kilowatt-hour)
          unit: ecoEquivalences.energy.unit
        },
        oil: {
          value: Number((totalRecycled * ecoEquivalences.oil.value).toFixed(2)), // liters
          unit: ecoEquivalences.oil.unit
        },
        co2: {
          value: Number((totalRecycled * ecoEquivalences.co2.value).toFixed(2)), // kg
          unit: ecoEquivalences.co2.unit
        },
        ligthsOn: {
          value: Number((totalRecycled * ecoEquivalences.ligthsOn.value).toFixed(2)), // hours
          unit: ecoEquivalences.ligthsOn.unit
        }
      }
    }
  }
}
