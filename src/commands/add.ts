import {Command, flags} from '@oclif/command'
import * as chalk from 'chalk'
import * as fse from 'fs-extra'

import {getTemplateByType} from '../templates'

export default class Add extends Command {
  static description = 'Add a react component to your project'

  static flags = {
    // flag with a value (-s, --style=VALUE)
    type: flags.string({char: 't', description: 'Page or Component'}),
    // flag with a value (-t, --type=VALUE)
    format: flags.string({
      char: 'f',
      description: 'TypeScript (tsx) or JavaScript (jsx)'
    }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'Component Name'}),
    // flag with a value (-s, --style=VALUE)
    style: flags.string({char: 's', description: 'SASS or CSS'}),
    // flag with a value (-s, --style=VALUE)
    path: flags.string({char: 'p', description: 'Path to components folder'}),
    // flag with no value (-h, --help)
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(Add)

    const name = flags.name || 'NewFeature'
    const path = flags.path || 'src/components'
    const type = flags.type || 'component'
    const format = flags.format || 'tsx'
    const style = flags.style || 'scss'

    const files = [
      {format: `${format}`, type: 'comp'},
      {format: `${style}`, type: 'style'},
      {format: `spec.${format}`, type: 'spec'}
    ]

    Promise.all(
      files.map(async file => {
        if (fse.existsSync(`${path}/${name}/${name}.${file.format}`)) {
          throw new Error(`${path}/${name} already exists`)
        }
        await fse.outputFile(
          `${path}/${name}/${name}.${file.format}`,
          getTemplateByType({name, format: file.format, type, fileType: file.type})
        )
      })
    )
      .then(() => {
        this.log(chalk.green(`${name} ${type} created successfully!`))
      })
      .catch(err => {
        this.log(chalk.red(`Whoops... there was an error: ${err.message}`))
      })
  }
}
