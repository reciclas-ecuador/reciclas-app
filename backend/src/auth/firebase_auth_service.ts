import * as FirebaseAdmin from 'firebase-admin'
import boom from '@hapi/boom'
import { type DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { type RegisterUser, type Role } from './types/auth'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../reciclas-app-firebase-adminsdk.json')

class FirebaseAuthService {
  private readonly admin: FirebaseAdmin.app.App
  constructor() {
    this.admin = FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(serviceAccount)
    })
  }

  async createUser(data: RegisterUser): Promise<{ uid: string, email: string, role: Role }> {
    const { email, password, role } = data
    const user = await this.admin.auth().createUser({
      email,
      password
    })
    await this.admin.auth().setCustomUserClaims(user.uid, { role })
    return {
      uid: user.uid,
      email: user.email ?? '',
      role
    }
  }

  async verifyIdToken(idToken: string): Promise<DecodedIdToken & { role: Role }> {
    return await this.admin.auth().verifyIdToken(idToken) as DecodedIdToken & { role: Role }
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
