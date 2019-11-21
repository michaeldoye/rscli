import {Opts} from './helpers'
import {javaScriptTemplate} from './javascript/javascript.template'
import {styleTemplate} from './style/style.template'
import {specTemplate} from './test/test.template'
import {indexTemplate} from './typescript/index.template'
import {typeScriptTemplate} from './typescript/typescript.template'

export const getTemplateByType = (opts: Opts): string => {
  const isTS = opts.format === 'tsx'

  if (opts.fileType === 'style') {
    return styleTemplate(opts)
  } else if (opts.fileType === 'comp') {
    return isTS ? typeScriptTemplate(opts) : javaScriptTemplate(opts)
  } else if (opts.fileType === 'spec') {
    return specTemplate(opts)
  } else if (opts.fileType === 'index') {
    return indexTemplate(opts)
  }
  return ''
}
