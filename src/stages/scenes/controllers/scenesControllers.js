import { message } from 'telegraf/filters'

export const questionAction = scene => {
  scene.enter(ctx => ctx.reply('Escribe Algo, solo lo reenviare y tal'))

  scene.on(message('text'), async ctx => {
    ctx.session.userReply = ctx.message.text
    await ctx.reply(`${ctx.session.userReply}`)
    return ctx.scene.leave()
  })
}

export const calculatorAction = scene => {
  scene.enter(async ctx => {
    await ctx.reply('Bienvenido!, Digita la operacion que deseas!')
    await ctx.reply('Operaciones Disponibles ( +, -, *, / )')
  })

  scene.on(message('text'), async ctx => {
    ctx.session.operation = ctx.message.text
    await ctx.reply('Finalizado!')
    return ctx.scene.leave()
  })
}
