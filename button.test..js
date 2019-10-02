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
	
	const mockFn = jest.fn();

	const container = shallow(<button {...initialProps} handleClick={mockFn} />);
	  
	const containerProp = shallow(<button {...propTypes} handleClick={mockFn} />);
	  
	const containerDefaultProp = shallow(<button {...defaultProps} handleClick={mockFn} />);

    it('should have proper props for button', () => {
      expect(container.find('button').props()).toEqual({
        type: 'submit',
        disabled: true
      });
    });
	
	it('should have proper props for button', () => {
      expect(containerProp.find('button').props()).toEqual({
        type: 'submit',
        disabled: true
      });
    });
	
	it('should have proper default props for button', () => {
      expect(containerDefaultProp.find('button').props()).toEqual({
        showLoader: false,
		disabled: false,
		block: false,
		srOnly: false
      });
    });
	
    

    // it( 'should have the proper defaultProps', ()=> {

    //   expect(
    //     JSON.stringify({
    //       example: 'hello world'
    //     })
    //   ).toEqual( JSON.stringify( defaultProps ) );
    // } );

    it( 'an instance of Button should have the proper propTypes set', () => {
       expect( Button.propTypes ).toBe( propTypes );
    } );

    it( 'an sintance of Button should have the proper defaultProps', () => {
       expect( Button.defaultProps ).toBe( defaultProps );
    } );
	
	it('should have a button value', () => {

	   expect(typeof(container.find('.button').node.props.value)).toBe('string');
	   expect(container.find('.button').node.props.value).toEqual('button test');
	});
	
	it('should call mock function when button is clicked', () => {
		container.simulate('click');
		expect(mockFn).toHaveBeenCalled();
	});

  });

  // describe('integration tests', () => {

  // } );

  // describe('unit tests', () => {

  // } );

  // describe('snapshot tests', () => {

  // } );

});
