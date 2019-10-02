import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button, { propTypes, defaultProps } from './Button';
import * as jestutils from './../../../utils/jest/jest';
import {shallow} from 'enzyme';

describe('<Button />tests', () => {
  it('renders without crashing', () => {
      mount( < Button /> );
  });

  describe('<button />', () => {

    const initialProps = {
      type: 'submit',
      disabled: true
  }

  const container = shallow(<button {...initialProps} />);

    it('should have proper props for button', () => {
      expect(container.find('button').props()).toEqual({
        type: 'submit',
        disabled: true
      });
    });
    

    // it( 'should have the proper defaultProps', ()=> {

    //   expect(
    //     JSON.stringify({
    //       example: 'hello world'
    //     })
    //   ).toEqual( JSON.stringify( defaultProps ) );
    // } );

    // it( 'an instance of Button should have the proper propTypes set', () => {
    //   expect( Button.propTypes ).toBe( propTypes );
    // } );

    // it( 'an sintance of Button should have the proper defaultProps', () => {
    //   expect( Button.defaultProps ).toBe( defaultProps );
    // } );

  } );

  // describe('integration tests', () => {

  // } );

  // describe('unit tests', () => {

  // } );

  // describe('snapshot tests', () => {

  // } );

});
