import 'dotenv/config'
import env from 'env-var'

export const PORT = env.get('PORT').required().asPortNumber() || 3000
export const MONGO_DB = env.get('MONGO_DB').required().asUrlString()
export const GOOGLE_CLIENT_ID = env.get('GOOGLE_CLIENT_ID').required().asString()
export const GOOGLE_CLIENT_SECRET = env.get('GOOGLE_CLIENT_SECRET').required().asString()