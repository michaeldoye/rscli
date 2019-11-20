import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { CoolFeatureComponent } from './CoolFeature';

describe('CoolFeatureComponent', () => {
  let container: any;

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
    const component = render(<CoolFeatureComponent />);

    expect(component).toBeTruthy();
  });
});
