rscli
=====

Simple React CLI

[![Version](https://img.shields.io/npm/v/rscli2.svg)](https://npmjs.org/package/rscli2)
[![Downloads/week](https://img.shields.io/npm/dw/rscli2.svg)](https://npmjs.org/package/rscli2)
[![License](https://img.shields.io/npm/l/rscli2.svg)](https://github.com/mdoye/rscli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rscli2
$ rscli COMMAND
running command...
$ rscli (-v|--version|version)
rscli2/1.0.3 darwin-x64 node-v10.16.0
$ rscli --help [COMMAND]
USAGE
  $ rscli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rscli add [COMPONENT]`](#rscli-add-component)
* [`rscli help [COMMAND]`](#rscli-help-command)

## `rscli add [COMPONENT]`

Add a react component to your project

```
USAGE
  $ rscli add [COMPONENT]

OPTIONS
  -f, --format=format  TypeScript (tsx) or JavaScript (jsx), (default: tsx)
  -h, --help           show CLI help
  -n, --name=name      Component Name, (default: NewFeature)
  -p, --path=path      Path to components folder, (default: src/components)
  -s, --style=style    SASS or CSS, (default: sass)
  -t, --type=type      Page or Component, (default: component)
```

_See code: [src/commands/add.ts](https://github.com/michaeldoye/rscli/blob/v1.0.3/src/commands/add.ts)_

## `rscli help [COMMAND]`

display help for rscli

```
USAGE
  $ rscli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
