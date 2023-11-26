import { type CollectCenter } from '@prisma/client'
import boom from '@hapi/boom'
import { type CreateCollectCenter, type UpdateCollectCenter } from '../types/collect_center'
import client from '../../../libs/prismadb'

export default class CollectCenterService {
  private readonly prisma = client

  async getAll(): Promise<CollectCenter[]> {
    return await this.prisma.collectCenter.findMany()
  }

  async getAllPublic(): Promise<Array<Pick<CollectCenter, 'id' | 'name'>>> {
    return await this.prisma.collectCenter.findMany({
      select: {
        id: true,
        name: true
      }
    })
  }

  async getStadistics(): Promise<{ totalCenters: number }> {
    const totalCenters = await this.prisma.collectCenter.count()

    return { totalCenters }
  }

  async getTotalRecolectedByIdDiary(id: number): Promise<{ collectCenter: CollectCenter, total: number }> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: {
        id
      },
      include: { logActionCollaborators: true }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    const { logActionCollaborators, ...restOfData } = collectCenter

    const todayRecolected = logActionCollaborators.filter((log) => new Date(log.submitDate) >= new Date(new Date().setHours(0, 0, 0, 0)))

    const total = todayRecolected.reduce((acc, recolect) => acc + recolect.quantity, 0)

    return { collectCenter: restOfData, total }
  }

  async getAllRecolectedById(id: number): Promise<{ collectCenter: CollectCenter, total: number }> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id },
      include: { logActionCollaborators: true }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    const total = collectCenter.logActionCollaborators.reduce((acc, recolect) => acc + recolect.quantity, 0)

    return { collectCenter, total }
  }

  async getAllEmployees(id: number): Promise<CollectCenter[]> {
    return await this.prisma.collectCenter.findMany({
      where: { id },
      include: { collectCenterEmployees: true }
    })
  }

  async getAllByLocation(locationId: number): Promise<CollectCenter[]> {
    return await this.prisma.collectCenter.findMany({
      where: { locationId }
    })
  }

  async getOne(id: number): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id },
      include: {
        location: true,
        manager: true,
        logActionCollaborators: {
          take: 20
        }
      }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    return collectCenter
  }

  async create(data: CreateCollectCenter): Promise<CollectCenter> {
    const { locationId, managerEmail } = data
    const areAllvaluesValid = await this.validLocationAndManager(locationId, managerEmail)

    if (!areAllvaluesValid) {
      throw boom.badRequest('Invalid location or manager')
    }

    return await this.prisma.collectCenter.create({
      data
    })
  }

  async setManager(id: number, managerEmail: string): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    if (managerEmail === undefined || managerEmail === null) {
      return await this.prisma.collectCenter.update({
        where: { id },
        data: { managerEmail: null }
      })
    }

    const manager = await this.prisma.centerEmployee.findFirst({
      where: { email: managerEmail }
    })

    if (manager === null) {
      throw boom.notFound('Manager not found')
    }

    return await this.prisma.collectCenter.update({
      where: { id },
      data: { managerEmail },
      include: { manager: true }
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

    if (managerEmail === undefined || managerEmail === null) {
      const location = await this.prisma.location.findFirst({ where: { id: locationId } })

      if (location === null) {
        return false
      }

      return true
    }

    const [location, manager] = await Promise.all([
      this.prisma.location.findFirst({ where: { id: locationId } }),
      this.prisma.centerEmployee.findFirst({ where: { email: managerEmail } })
    ])

    if (location === null || manager === null) {
      return false
    }

    return true
  }

  async verifyHash(hash: string): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { hash }
    })

    if (collectCenter === null) {
      throw boom.notFound('Hash not found')
    }

    return collectCenter
  }

  async updateHash(id: number, hash: string): Promise<CollectCenter> {
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id }
    })

    if (collectCenter === null) {
      throw boom.notFound('Collect center not found')
    }

    return await this.prisma.collectCenter.update({
      where: { id },
      data: { hash }
    })
  }
}
