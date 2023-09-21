import { Scenes } from 'telegraf'

export const addCommand = (bot, str) =>
  bot.command(str, ctx => ctx.scene.enter(str))

export const createScene = (sceneName, description, action) => {
  const scene = new Scenes.BaseScene(sceneName)
  action(scene)

  return {
    scene,
    command: {
      name: sceneName,
      description
    }
  }
}

export const buildScenes = commands => {
  return commands.reduce((prev, { name, description, action }) => {
    return [...prev, createScene(name, description, action)]
  }, [])
}

export const buildStage = scenesObjArr => {
  const scenesReducers = scenesObjArr.reduce(
    (prev, { scene, command }) => {
      prev.scenes.push(scene)
      prev.commands.push(command)
      return prev
    },
    {
      scenes: [],
      commands: []
    }
  )

  return {
    stage: new Scenes.Stage([...scenesReducers.scenes]),
    commands: [...scenesReducers.commands]
  }
}
