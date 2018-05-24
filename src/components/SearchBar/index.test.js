import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchBar from '.';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchBar hasError={false} handleSubmit={() => "mock"} setSearchReference={() => "mock"}/>
    );
    expect(output).toMatchSnapshot();
  });

  it('should have an input field', () => {
    const output = shallow(
      <SearchBar hasError={false} handleSubmit={() => "mock"} setSearchReference={() => "mock"}/>
    );
    expect(output.find('input[type="text"]').exists()).toBeTruthy();
  });

  it('should have a search button', () => {
    const output = shallow(
      <SearchBar hasError={false} handleSubmit={() => "mock"} setSearchReference={() => "mock"}/>
    );
    expect(output.find('.search-button').exists()).toBeTruthy();
  });

  it('should toggle the warning class on error', () => {
    const output = shallow(
      <SearchBar hasError={true} handleSubmit={() => "mock"} setSearchReference={() => "mock"}/>
    );
    expect(output.find('.search-icon').every('.warning')).toBeTruthy();
    expect(output.find('.search-field-input').hasClass('warning')).toBeTruthy();
  });
});
