import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Quote component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
