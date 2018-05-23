import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Footer from '.';

describe('Footer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Footer/>
    );
    expect(output).toMatchSnapshot();
  });

  it('should display the correct text', () => {
    const output = shallow(
      <Footer/>
    );
    expect(output.find('p').hasClass('footer-text')).toEqual(true);
    expect(output.text()).toEqual('© 2018 Shipt, Inc. and its services are not necessarily affiliated or endorsed by the retailers on this site.');
  });
});
