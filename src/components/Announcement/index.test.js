import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Announcement from '.';

describe('Announcement', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Announcement/>
    );
    expect(output).toMatchSnapshot();
  });

  it('should display the correct text', () => {
    const output = shallow(
      <Announcement/>
    );
    expect(output.find('h5').hasClass('announcement-text')).toEqual(true);
  });

  it('should render on hover', () => {
    const output = shallow(
      <Announcement/>
    );
    output.simulate("mouseover");
    expect(output).toMatchSnapshot();
  });
});
