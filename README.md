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
$ npm install -g rscli
$ rscli COMMAND
running command...
$ rscli (-v|--version|version)
rscli/0.0.0 darwin-x64 node-v10.16.0
$ rscli --help [COMMAND]
USAGE
  $ rscli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rscli add [FILE]`](#rscli-hello-file)
* [`rscli help [COMMAND]`](#rscli-help-command)

## `rscli add`

Generates a React Function Component at the given path including test file and css file

```
USAGE
  $ rscli add [PATH] [NAME] [TYPE] [FORMAT] [STYLE]

OPTIONS
  -h, --help                 show CLI help
  -p, --path=path/to/comps   path to components folder (default: src/components)   
  -n, --name=componentName   name of the component to be created (default: NewFeature)
  -t, --type=componentType   Page or Component (default: component)
  -s, --style=CSSType        SCSS or CSS (default: SCSS)
  -f, --format=formatType    tsx or jsx (default: tsx)

EXAMPLE
  $ rscli add --path=src/components --name=CoolFeature --format=jsx --style=css
```

_See code: [src/commands/add.ts](https://github.com/mdoye/rscli/blob/v0.0.0/src/commands/add.ts)_

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

<!-- commandsstop -->
