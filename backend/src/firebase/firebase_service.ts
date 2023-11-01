import * as FirebaseAdmin from 'firebase-admin'
import boom from '@hapi/boom'
import { type DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { type RegisteredUser, type RegisterCenterEmployee, type RegisterUser, type Role, type Message } from './types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../fireKey.json')

class FirebaseService {
  private readonly admin: FirebaseAdmin.app.App

  constructor() {
    this.admin = FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(serviceAccount)
    })
  }

  async createUser(data: RegisterUser): Promise<RegisteredUser> {
    const { email, password, role } = data

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
    const { email, password, role } = data
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
      console.log('[/login]]', idToken)
      const rta = await this.admin.auth().verifyIdToken(idToken) as DecodedIdToken & { role: Role }
      console.log('[rta]', rta)
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

  // Cloud Messaging

  async sendNotificationToUser(registrationToken: string, message: Message): Promise<void> {
    await this.admin.messaging().send({
      token: registrationToken,
      notification: {
        title: message.title,
        body: message.body
      },
      data: {
        redirectTo: message.redirectTo
      }
    })
  }
}

export const firebaseService = new FirebaseService()
