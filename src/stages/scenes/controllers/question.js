import { message } from 'telegraf/filters'
import { createScene } from '../../../utils/botFn.js'

const questionAction = scene => {
  scene.enter(ctx => ctx.reply('Enter token'))

  scene.on(message('text'), async ctx => {
    // validate
    ctx.session.token = ctx.message.text
    await ctx.reply(`your token is ${ctx.session.token}`)
    return ctx.scene.leave()
  })
}

export const question = createScene('question', questionAction)
