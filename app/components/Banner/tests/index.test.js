import React from 'react';
import { shallow } from 'enzyme';

import Banner from '../index';

describe('<Banner />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Banner />);
    expect(renderedComponent.length).toEqual(1);
  });
});
