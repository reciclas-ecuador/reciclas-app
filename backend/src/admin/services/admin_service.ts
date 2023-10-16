import { PrismaClient } from '@prisma/client'
import { transformEcoEquivalences } from '../../../libs/ecoequivalences'
import { type EcoEquivalences } from '../../collaborators/types/users'
import { type UsersInfo } from '../types/admin'

//
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

  async getUsersInfo(): Promise<UsersInfo> {
    const [total, totalActive, totalInactive] = await Promise.all([
      await this.prisma.collaborator.count(),
      await this.prisma.collaborator.count({
        where: {
          status: 'active'
        }
      }),
      await this.prisma.collaborator.count({
        where: {
          status: 'inactive'
        }
      })
    ])

    return {
      total,
      totalActive,
      totalInactive
    }
  }

  async getTotalEmployees(): Promise<{ total: number }> {
    const total = await this.prisma.centerEmployee.count()
    return {
      total
    }
  }

  async getAverageAttentionQuality(): Promise<{ average: number }> {
    const average: any = await this.prisma.$queryRaw`
      SELECT
        AVG(attention_quality) as average
      FROM
        log_actions_collaborator
      WHERE
        attention_quality IS NOT NULL
    `

    return {
      average: Number(average[0].average)
    }
  }

  async getTotalEcoEquivalences(): Promise<EcoEquivalences> {
    const recolected = await this.getTotalRecolected()

    return transformEcoEquivalences(recolected.total)
  }
}
