import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Hero from '.';

describe('Hero', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Hero hasError={false} handleSubmit={() => "mock"}/>
    );
    expect(output).toMatchSnapshot();
  });

  it('should have search bar component', () => {
    const output = shallow(
      <Hero hasError={false} handleSubmit={() => "mock"}/>
    );
    expect(output.find('SearchBar').exists()).toBeTruthy();
  });
});
