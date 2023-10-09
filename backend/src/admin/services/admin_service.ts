import { PrismaClient } from '@prisma/client'
import { transformEcoEquivalences } from '../../../libs/ecoequivalences'
import { type EcoEquivalences } from '../../collaborators/types/users'

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
