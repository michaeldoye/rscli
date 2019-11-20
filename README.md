rscli
=====

Simple React CLI

[![Version](https://img.shields.io/npm/v/rscli.svg)](https://npmjs.org/package/rscli)
[![Downloads/week](https://img.shields.io/npm/dw/rscli.svg)](https://npmjs.org/package/rscli2)
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
rscli2/1.0.1 darwin-x64 node-v10.16.0
$ rscli --help [COMMAND]
USAGE
  $ rscli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rscli add [FILE]`](#rscli-add-file)
* [`rscli help [COMMAND]`](#rscli-help-command)

## `rscli add [FILE]`

Add a react component to your project

```
USAGE
  $ rscli add [FILE]

OPTIONS
  -f, --format=format  TypeScript (tsx) or JavaScript (jsx)
  -h, --help           show CLI help
  -n, --name=name      Component Name
  -p, --path=path      Path to components folder
  -s, --style=style    SASS or CSS
  -t, --type=type      Page or Component
```

_See code: [src/commands/add.ts](https://github.com/mdoye/rscli/blob/v1.0.1/src/commands/add.ts)_

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
