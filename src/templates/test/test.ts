import {capitalize, Opts} from '../helpers'

export const specTemplate = (opts: Opts): string => {
  return `import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { ${opts.name}${capitalize(opts.type)} } from './${opts.name}';

describe('${opts.name}${capitalize(opts.type)}', () => {
  let container${opts.format === 'spec.tsx' ? ': any;' : ';'}

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    cleanup();
  });

  it('should render without crashing', () => {
    const component = render(<${opts.name}${capitalize(opts.type)} />);

    expect(component).toBeTruthy();
  });
});
`
}
