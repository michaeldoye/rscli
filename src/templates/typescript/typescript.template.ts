import {capitalize, deCapitalize, Opts} from '../helpers'

export const typeScriptTemplate = (opts: Opts): string => {
  return `import React from 'react';

interface ${opts.name}${capitalize(opts.type)}Props {}

const ${opts.name}${capitalize(opts.type)}: React.FC<${opts.name}${capitalize(opts.type)}Props> = ({}) => {

  return (
    <div className='${deCapitalize(opts.name)}-${opts.type}'>
      ${opts.name}${capitalize(opts.type)} works!
    </div>
  );
};

export default ${opts.name}${capitalize(opts.type)}
`
}
