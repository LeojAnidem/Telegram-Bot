import { buildStage } from '../utils/botFn.js'
import { commandScenes } from './scenes/index.js'

export const stageManager = buildStage([...commandScenes])
