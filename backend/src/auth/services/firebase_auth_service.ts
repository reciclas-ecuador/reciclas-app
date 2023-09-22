import * as FirebaseAdmin from 'firebase-admin'
import boom from '@hapi/boom'
import { type DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { type RegisteredUser, type RegisterCenterEmployee, type RegisterUser, type Role } from '../types/auth'
import UsersService from '../../collaborators/services/users_service'
import CenterEmployeesService from '../../center_employees/services/center_employees_service'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../../reciclas-app-firebase-adminsdk.json')

class FirebaseAuthService {
  private readonly admin: FirebaseAdmin.app.App
  private readonly usersService: UsersService
  private readonly centerEmployeesService: CenterEmployeesService

  constructor() {
    this.usersService = new UsersService()
    this.centerEmployeesService = new CenterEmployeesService()
    this.admin = FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(serviceAccount)
    })
  }

  async createUser(data: RegisterUser): Promise<RegisteredUser> {
    const { email, password, role, ...restOfData } = data
    if (role !== 'USER') {
      throw boom.badRequest('You can be only a user')
    }
    await this.usersService.create({ email, ...restOfData })
    const user = await this.admin.auth().createUser({
      email,
      password
    })
    await this.admin.auth().setCustomUserClaims(user.uid, { role: role ?? 'USER' })
    return {
      uid: user.uid,
      email: user.email ?? '',
      role
    }
  }

  async createEmployee(data: RegisterCenterEmployee): Promise<RegisteredUser> {
    const { email, password, role, ...restOfData } = data
    if (role !== 'CENTER_EMPLOYEE') {
      throw boom.badRequest('You can be only a center employee')
    }
    await this.centerEmployeesService.create({
      email,
      ...restOfData
    })
    const user = await this.admin.auth().createUser({
      email,
      password
    })
    await this.admin.auth().setCustomUserClaims(user.uid, { role: role ?? 'CENTER_EMPLOYEE' })
    return {
      uid: user.uid,
      email: user.email ?? '',
      role
    }
  }

  async verifyIdToken(idToken: string): Promise<DecodedIdToken & { role: Role }> {
    try {
      const rta = await this.admin.auth().verifyIdToken(idToken) as DecodedIdToken & { role: Role }

      return rta
    } catch (error) {
      throw boom.unauthorized('Token invalid or expired')
    }
  }

  async assignUserRole(uid: string, role: Role): Promise<void> {
    await this.admin.auth().setCustomUserClaims(uid, { role })
  }

  async getUserRole(email: string): Promise<Role> {
    const user = await this.admin.auth().getUserByEmail(email)
    if (user.customClaims?.role === undefined || user.customClaims.role === null) {
      throw boom.unauthorized('User has no role')
    }
    return user.customClaims.role
  }
}
export const firebaseAuthService = new FirebaseAuthService()
