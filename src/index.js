import { session, Telegraf } from 'telegraf'
import './config.js'
import { stageManager } from './stages/index.js'
import { addCommand } from './utils/botFn.js'

// 🤖 Config Bot
const bot = new Telegraf(process.env.BOT_TOKEN)

// 🛠️ Middlewares
bot.use(session())
bot.use(stageManager.stage.middleware())

// 📲 Commands
// ----- Scene Commands
stageManager.commands.map(command => addCommand(bot, command))

// ----- Bot Commands
bot.help(ctx => {
  ctx.reply('Estos son todos los comandos: ')
  ctx.reply(...stageManager.commands.map(cmd => `/${cmd}`))
})

bot.launch()
