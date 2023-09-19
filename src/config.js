import dotenv from 'dotenv'
dotenv.config()

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  BOT_TOKEN: process.env.BOT_TOKEN || ''
}
