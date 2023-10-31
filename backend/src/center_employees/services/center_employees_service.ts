import { type CenterEmployee } from '@prisma/client'
import boom from '@hapi/boom'
import { type CreateCenterEmployee, type UpdateCenterEmployee } from '../types/center_employees'
import client from '../../../libs/prismadb'

export default class CenterEmployeesService {
  private readonly prisma = client

  async getAll(): Promise<CenterEmployee[]> {
    return await this.prisma.centerEmployee.findMany()
  }

  async getAllByCollectCenter(collectCenterId: number): Promise<CenterEmployee[]> {
    return await this.prisma.centerEmployee.findMany({
      where: { collectCenterId }
    })
  }

  async getOne(email: string): Promise<CenterEmployee> {
    const centerEmployee = await this.prisma.centerEmployee.findUnique({
      where: { email }
    })

    if (centerEmployee === null) {
      throw boom.notFound('Center employee not found')
    }

    return centerEmployee
  }

  async create(data: CreateCenterEmployee): Promise<CenterEmployee> {
    const { collectCenterId } = data
    const collectCenter = await this.prisma.collectCenter.findFirst({
      where: { id: collectCenterId }
    })
    if (collectCenter === null) {
      throw boom.badRequest('Invalid collect center')
    }
    return await this.prisma.centerEmployee.create({ data })
  }

  async update(email: string, changes: UpdateCenterEmployee): Promise<CenterEmployee> {
    const centerEmployee = await this.prisma.centerEmployee.findUnique({
      where: { email }
    })

    if (centerEmployee === null) {
      throw boom.notFound('Center employee not found')
    }

    return await this.prisma.centerEmployee.update({
      where: { email },
      data: changes
    })
  }

  async remove(email: string): Promise<CenterEmployee> {
    const centerEmployee = await this.prisma.centerEmployee.findUnique({
      where: { email }
    })

    if (centerEmployee === null) {
      throw boom.notFound('Center employee not found')
    }

    return await this.prisma.centerEmployee.delete({
      where: { email }
    })
  }
}
