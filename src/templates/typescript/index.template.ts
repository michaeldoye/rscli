import {Opts} from '../helpers'

export const indexTemplate = (opts: Opts): string => {
  return `export { default } from './${opts.name}';`
}
