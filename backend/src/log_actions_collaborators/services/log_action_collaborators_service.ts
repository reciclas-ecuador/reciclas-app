import { type LogActionsCollaborator, PrismaClient } from '@prisma/client'
import { type UpdateLogActionCollaborator, type CreateLogActionCollaborator } from '../types/log_action_collaborators'
import boom from '@hapi/boom'

export default class LogActionsCollaboratorsService {
  private readonly prisma: PrismaClient = new PrismaClient()

  async getAll(): Promise<LogActionsCollaborator[]> {
    return await this.prisma.logActionsCollaborator.findMany()
  }

  async getOne(id: number): Promise<LogActionsCollaborator> {
    const logActionCollaborator = await this.prisma.logActionsCollaborator.findFirst({
      where: { id },
      include: {
        collaborator: true,
        collectCenter: true,
        receiver: true,
        observations: true
      }
    })

    if (logActionCollaborator === null) {
      throw boom.notFound('LogActionCollaborator not found')
    }

    return logActionCollaborator
  }

  async create(data: CreateLogActionCollaborator): Promise<LogActionsCollaborator> {
    const { collaboratorEmail, collectCenterId, receiverEmail } = data

    const existAllValues = await this.validUserCenterAndReceiver(
      collaboratorEmail,
      collectCenterId,
      receiverEmail
    )

    if (!existAllValues) {
      throw boom.badRequest('Invalid values')
    }

    return await this.prisma.logActionsCollaborator.create({ data })
  }

  async update(id: number, changes: UpdateLogActionCollaborator): Promise<LogActionsCollaborator> {
    const logActionCollaborator = await this.prisma.logActionsCollaborator.findFirst(
      { where: { id } }
    )

    if (logActionCollaborator === null) {
      throw boom.notFound('LogActionCollaborator not found')
    }

    return await this.prisma.logActionsCollaborator.update({
      where: { id },
      data: changes
    })
  }

  async remove(id: number): Promise<LogActionsCollaborator> {
    const logActionCollaborator = await this.prisma.logActionsCollaborator.findFirst(
      { where: { id } }
    )

    if (logActionCollaborator === null) {
      throw boom.notFound('LogActionCollaborator not found')
    }

    return await this.prisma.logActionsCollaborator.delete({ where: { id } })
  }

  private async validUserCenterAndReceiver(
    collaboratorEmail: string,
    collectCenterId: number,
    receiverEmail: string
  ): Promise<boolean> {
    // valid the three users in a parallel way
    const [collaborator, collectCenter, receiver] = await Promise.all([
      this.prisma.collaborator.findFirst({ where: { email: collaboratorEmail } }),
      this.prisma.collectCenter.findFirst({ where: { id: collectCenterId } }),
      this.prisma.centerEmployee.findFirst({ where: { email: receiverEmail } })
    ])

    if (collaborator === null || collectCenter === null || receiver === null) {
      return false
    }

    return true
  }
}
