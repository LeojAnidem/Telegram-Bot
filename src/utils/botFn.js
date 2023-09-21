import { Scenes } from 'telegraf'

export const addCommand = (bot, str) =>
  bot.command(str, ctx => ctx.scene.enter(str))

export const createScene = (sceneName, action) => {
  const scene = new Scenes.BaseScene(sceneName)
  action(scene)

  return {
    scene,
    command: sceneName
  }
}

export const createCmdObj = (name, description) => {
  return { name, description }
}
