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
stageManager.commands.map(({ name }) => addCommand(bot, name))

// ----- Bot Commands
bot.help(async ctx => {
  await ctx.reply('Estos son todos los comandos: ')

  const commandsFormat =
    stageManager.commands
      .map(
        ({ name, description }) => `/${name} - ${description}`
      )
      .reduce((prev, cur) => prev + ' \n' + cur)

  await ctx.reply(commandsFormat)
})

bot.launch()
