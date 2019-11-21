import {deCapitalize, Opts} from '../helpers'

export const styleTemplate = (opts: Opts): string => {
  return `.${deCapitalize(opts.name)}-${deCapitalize(opts.type)} { }`
}
