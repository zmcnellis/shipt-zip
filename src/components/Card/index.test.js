import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Card title="mockTitle" description="mockDescription" step="1" />
    );
    expect(output).toMatchSnapshot();
  });

  it('should display the correct title', () => {
    const output = shallow(
      <Card title="mockTitle" description="mockDescription" step="1" />
    );
    expect(output.find('.article-title').text()).toEqual('mockTitle');
  });

  it('should display the correct description', () => {
    const output = shallow(
      <Card title="mockTitle" description="mockDescription" step="1" />
    );
    expect(output.find('.article-description').text()).toEqual('mockDescription');
  });
});
