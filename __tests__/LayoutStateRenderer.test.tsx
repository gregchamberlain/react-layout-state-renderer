import React from 'react';
import { shallow } from 'enzyme';
import * as utils from 'layout-state-utils';

import LayoutStateRenderer from '../src';

const MyComponent = () => <h1>MyComponent</h1>;

describe('LayoutStateRenderer', () => {
  let layoutState;
  beforeEach(() => {
    layoutState = {};
    layoutState = utils.addItem(layoutState, { key: 'root', type: 'div' });
  });
  it('Renders to root item', () => {
    const wrapper = shallow(
      <LayoutStateRenderer layoutState={layoutState} rootKey="root" />,
    );
    expect(wrapper.html()).toEqual('<div></div>');
  });
  it('Renders nested items', () => {
    layoutState = utils.addItem(layoutState, { key: '1', type: 'div' });
    layoutState = utils.moveItem(layoutState, '1', { key: 'root', index: 0 });
    const wrapper = shallow(
      <LayoutStateRenderer layoutState={layoutState} rootKey="root" />,
    );
    expect(wrapper.html()).toEqual('<div><div></div></div>');
  });
  it('Renders custom components', () => {
    layoutState = utils.addItem(layoutState, { key: '1', type: 'MyComponent' });
    layoutState = utils.moveItem(layoutState, '1', { key: 'root', index: 0 });
    const wrapper = shallow(
      <LayoutStateRenderer
        layoutState={layoutState}
        rootKey="root"
        components={{ MyComponent }}
      />,
    );
    expect(wrapper.html()).toEqual('<div><h1>MyComponent</h1></div>');
  });
});
