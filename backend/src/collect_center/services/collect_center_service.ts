import { type CollectCenter, PrismaClient } from '@prisma/client'
import boom from '@hapi/boom'
import { type CreateCollectCenter, type UpdateCollectCenter } from '../types/collect_center'

export default class CollectCenterService {
  private readonly prisma = new PrismaClient()

  async getAll(): Promise<CollectCenter[]> {
    return await this.prisma.collectCenter.findMany()
  }

  async getOne(id: number): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id },
      include: { location: true, manager: true }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    return collectCenter
  }

  async create(body: CreateCollectCenter): Promise<CollectCenter> {
    const { locationId, managerEmail } = body
    const areAllvaluesValid = await this.validLocationAndManager(locationId, managerEmail)

    if (!areAllvaluesValid) {
      throw boom.badRequest('Invalid location or manager')
    }

    return await this.prisma.collectCenter.create({
      data: body
    })
  }

  async update(id: number, changes: UpdateCollectCenter): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    return await this.prisma.collectCenter.update({
      where: { id },
      data: changes
    })
  }

  async remove(id: number): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    return await this.prisma.collectCenter.delete({ where: { id } })
  }

  private async validLocationAndManager(locationId: number, managerEmail: string): Promise<boolean> {
    // valid location and manager in a parallel way
    const [location, manager] = await Promise.all([
      this.prisma.location.findFirst({ where: { id: locationId } }),
      this.prisma.centerEmployee.findFirst({ where: { email: managerEmail } })
    ])

    if (location === null || manager === null) {
      return false
    }

    return true
  }
}
