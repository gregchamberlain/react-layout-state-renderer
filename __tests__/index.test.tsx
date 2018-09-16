import React from 'react';
import { shallow } from 'enzyme';

import StarterComponent from '../src';

describe('StarterPackage', () => {
  it('Render without exploding', () => {
    const wrapper = shallow(<StarterComponent />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
