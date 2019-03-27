type EcLevel = 'L' | 'M' | 'Q' | 'H'

interface Option {
  ec_level?: EcLevel
  type: 'svg',
  margin?: number
}

type ImageSync = (text: string, option?: Option) => string
type SvgObject = (text: string, option?: Option) => any
type Matrix = (text: string, option?: EcLevel) => Array<Array<0 | 1>>

export const imageSync: ImageSync
export const svgObject: ImageSync
export const matrix: ImageSync