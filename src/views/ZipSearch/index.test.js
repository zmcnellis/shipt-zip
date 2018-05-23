import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ZipSearch from '.';

describe('ZipSearch', () => {
  it('should match snapshot', () => {
    const output = shallow(
      <ZipSearch/>
    );
    expect(output).toMatchSnapshot();
  });
});
