import { type Location } from '@prisma/client'
import { type UpdateLocation, type CreateLocation } from '../types/location'
import boom from '@hapi/boom'
import client from '../../../libs/prismadb'

export default class LocationService {
  private readonly prisma = client

  async getAll(): Promise<Location[]> {
    return await this.prisma.location.findMany()
  }

  async getOne(id: number): Promise<Location> {
    const location = await this.prisma.location.findFirst({
      where: { id }
    })

    if (location === null) {
      throw boom.notFound('Location not found')
    }

    return location
  }

  async create(body: CreateLocation): Promise<Location> {
    return await this.prisma.location.create({
      data: body
    })
  }

  async update(id: number, changes: UpdateLocation): Promise<Location> {
    const location = await this.prisma.location.findFirst({
      where: { id }
    })

    if (location === null) {
      throw boom.notFound('Location not found')
    }

    return await this.prisma.location.update({
      where: { id },
      data: changes
    })
  }

  async remove(id: number): Promise<Location> {
    const location = await this.prisma.location.findFirst({
      where: { id }
    })

    if (location === null) {
      throw boom.notFound('Location not found')
    }

    return await this.prisma.location.delete({ where: { id } })
  }
}
