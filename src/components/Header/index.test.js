import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '.';

describe('Header', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Header/>
    );
    expect(output).toMatchSnapshot();
  });

  it('should have semantic tags', () => {
    const output = shallow(
      <Header/>
    );
    expect(output.find('header').exists()).toBeTruthy();
    expect(output.find('nav').exists()).toBeTruthy();
    expect(output.find('img.logo').exists()).toBeTruthy();
  });
});
