import { IAddConfettiConfig } from './types'
import {
  INITIAL_SHAPE_RADIUS,
  INITIAL_EMOJI_SIZE,

  DEFAULT_CONFETTIES_NUMBER,
  DEFAULT_EMOJIES_NUMBER,
  DEFAULT_CONFETTI_COLORS,
} from './consts'

function normalizeConfettiConfig(confettiConfig: IAddConfettiConfig): Required<IAddConfettiConfig> {
  const {
    confettiRadius = INITIAL_SHAPE_RADIUS,
    confettiesNumber = confettiConfig.emojies ? DEFAULT_EMOJIES_NUMBER : DEFAULT_CONFETTIES_NUMBER,
    confettiColors = DEFAULT_CONFETTI_COLORS,

    emojies = [],
    emojiSize = INITIAL_EMOJI_SIZE,
  } = confettiConfig

  return { confettiRadius, confettiesNumber, confettiColors, emojies, emojiSize }
} 

export { normalizeConfettiConfig }
