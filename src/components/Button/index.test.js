import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Button text="mockText" size="large" onClick={() => "mock"}/>
    );
    expect(output).toMatchSnapshot();
  });

  it('should display the correct text', () => {
    const output = shallow(
      <Button text="mockText" size="large" onClick={() => "mock"}/>
    );
    expect(output.text()).toEqual('mockText');
  });

  it('should display the correct size', () => {
    const buttonLarge = shallow(
      <Button text="mockText" size="large" onClick={() => "mock"}/>
    );
    const buttonNormal = shallow(
      <Button text="mockText" size="normal" onClick={() => "mock"}/>
    );
    expect(buttonLarge.hasClass('button-lg')).toEqual(true);
    expect(buttonNormal.hasClass('button-lg')).toEqual(false);
  });
});
