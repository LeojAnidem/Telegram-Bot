import { buildScenes } from '../../utils/botFn.js'
import {
  calculatorAction,
  questionAction
} from './controllers/scenesControllers.js'

const commands = [
  {
    name: 'question',
    description: 'Copia lo que respondes a su pregunta',
    action: questionAction
  },
  {
    name: 'calculate',
    description: 'Calculadora Basica',
    action: calculatorAction
  }
]

export const commandScenes = buildScenes([...commands])
