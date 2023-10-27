import boom from '@hapi/boom'
import { type DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { type RegisteredUser, type RegisterCenterEmployee, type RegisterUser, type Role } from '../types/auth'
import UsersService from '../../collaborators/services/users_service'
import CenterEmployeesService from '../../center_employees/services/center_employees_service'
import { firebaseService } from '../../firebase/firebase_service'

export default class AuthService {
  private readonly firebaseService: typeof firebaseService
  private readonly usersService: UsersService
  private readonly centerEmployeesService: CenterEmployeesService

  constructor() {
    this.usersService = new UsersService()
    this.centerEmployeesService = new CenterEmployeesService()
    this.firebaseService = firebaseService
  }

  async createUser(data: RegisterUser): Promise<RegisteredUser> {
    const { email, password, role, ...restOfData } = data

    if (role !== 'USER') {
      throw boom.badRequest('You can be only a user')
    }
    const user = await this.usersService.create({ email, ...restOfData })

    const registeredUserData = await this.firebaseService.createUser(data)
    return {
      ...registeredUserData,
      name: user.name
    }
  }

  async createEmployee(data: RegisterCenterEmployee): Promise<RegisteredUser> {
    const { email, password, role, ...restOfData } = data
    if (role !== 'CENTER_EMPLOYEE') {
      throw boom.badRequest('You can be only a center employee')
    }
    const user = await this.centerEmployeesService.create({
      email,
      ...restOfData
    })

    const registeredEmployeeData = await this.firebaseService.createEmployee(data)

    return {
      ...registeredEmployeeData,
      name: user.name
    }
  }

  async verifyIdToken(idToken: string): Promise<DecodedIdToken & { role: Role }> {
    try {
      const rta = await this.firebaseService.verifyIdToken(idToken)

      return rta
    } catch (error) {
      throw boom.unauthorized('Token invalid or expired')
    }
  }

  async assignUserRole(uid: string, role: Role): Promise<void> {
    await this.firebaseService.assignUserRole(uid, role)
  }

  async getUserRole(email: string): Promise<Role> {
    return await this.firebaseService.getUserRole(email)
  }
}
