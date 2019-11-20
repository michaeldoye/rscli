import {Opts} from './helpers'
import {javaScriptTemplate} from './javascript/javascript'
import {styleTemplate} from './style/style'
import {specTemplate} from './test/test'
import {typeScriptTemplate} from './typescript/typescript'

export const getTemplateByType = (opts: Opts): string => {
  const isTS = opts.format === 'tsx'

  if (opts.fileType === 'style') {
    return styleTemplate(opts)

  } else if (opts.fileType === 'comp') {
    if (isTS) {
      return typeScriptTemplate(opts)
    }
    return javaScriptTemplate(opts)

  } else if (opts.fileType === 'spec') {
    return specTemplate(opts)

  }
  return ''
}
