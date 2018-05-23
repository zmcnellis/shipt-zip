import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as api from '.'

describe('ZipApi', () => {
  it('should return valid zip codes for all 5 digit data', () => {
    const zips_success = ['35203', '98001', '99515', '12345'];
    zips_success.forEach(zip => {
      expect(api.isValidZip(zip)).toBeTruthy();
    })
  });

  it('should return invalid zip codes if not 5 digits or contains letters', () => {
    const zips_failure = ['352033', '1124', '352b1'];
    zips_failure.forEach(zip => {
      expect(api.isValidZip(zip)).toBeFalsy();
    })
  });
});
