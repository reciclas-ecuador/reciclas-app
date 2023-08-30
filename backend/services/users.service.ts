/**
 * This file is use for bussiness logic
 * Here you can use prisma client to interact with database
 *
*/

import { /* type User, */ type PrismaClient } from '@prisma/client'

export class UsersService {
  constructor(private readonly prisma: PrismaClient) { }

  // async getAll(): Promise<User[]> {
  // return await this.prisma.user.findMany()
  // }
}
