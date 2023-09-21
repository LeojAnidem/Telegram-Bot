import { Scenes } from 'telegraf'
import { question } from './scenes/index.js'

const buildStage = scenesObjArr => {
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

const scenesObj = [question]
export const stageManager = buildStage(scenesObj)
