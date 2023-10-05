import { PrismaClient } from '@prisma/client'

export class AdminService {
  private readonly prisma = new PrismaClient()

  async getTotalRecolected(): Promise<{ total: number }> {
    const total: any = await this.prisma.$queryRaw`
      SELECT
        SUM(quantity) as quantity
      FROM
        log_actions_collaborator
    `
    return {
      total: total[0].quantity
    }
  }

  async getTotalUsers(): Promise<{ total: number }> {
    const total = await this.prisma.collaborator.count()
    return {
      total
    }
  }
}
