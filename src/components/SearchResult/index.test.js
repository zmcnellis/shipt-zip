import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchResult from '.';

describe('SearchResult', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchResult id="1" name="mockName" date="2016-01-29T00:00:00.000-05:00"/>
    );
    expect(output).toMatchSnapshot();
  });

  describe('should show the correct date', () => {

    it('when date is in the past', () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      const output = shallow(
        <SearchResult id="1" name="mockName" date={date.toString()}/>
      );
      expect(output.find('.launch-date').text()).toEqual('Now Available');
    });

    it('when date is in the future', () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      const output = shallow(
        <SearchResult id="1" name="mockName" date={date.toString()}/>
      );

      expect(output.find('.launch-date').text()).toEqual(`Coming ${date.getMonth() + 1}/${date.getDate()}`);
    });

    it('when date is equal to the current date', () => {
      const date = new Date();

      const output = shallow(
        <SearchResult id="1" name="mockName" date={date.toString()}/>
      );
      expect(output.find('.launch-date').text()).toEqual('Now Available');
    });
  });
});
