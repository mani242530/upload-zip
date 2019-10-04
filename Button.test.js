import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button, { propTypes, defaultProps } from './Button';
import { shallow } from 'enzyme';
import * as jestutils from './../../../utils/jest/jest';
import renderer from 'react-test-renderer';

describe( '<Button />tests', () => {
  it( 'renders without crashing', () => {
    shallow( < Button /> );
  } );

  describe( 'properties', () => {

    it( 'should have the proper propTypes', () => {
      expect(
        JSON.stringify( {
          type: PropTypes.oneOf( ['submit', 'button', 'reset'] ),
          btnStyle: PropTypes.oneOf( ['primary', 'secondary', 'tertiary', 'ghost', 'icon', 'link'] ),
          size: PropTypes.oneOf( ['small', 'medium', 'large'] ),
          block: PropTypes.bool,
          disabled: PropTypes.bool,
          showLoader: PropTypes.bool,
          tabIndex: PropTypes.number,
          id: PropTypes.string,
          dataNavDescription: PropTypes.string,
          clickEventHandler: PropTypes.func,
          componentshallowedHandler: PropTypes.func,
          ariaPressed: PropTypes.bool,
          ariaLabel: PropTypes.string,
          ariaSelected: PropTypes.bool,
          ariaControls: PropTypes.string,
          onFocus: PropTypes.func,
          onBlur: PropTypes.func,
          srOnly: PropTypes.bool

        } )
      ).toEqual( JSON.stringify( propTypes ) );
    } );

    it( 'should have the proper defaultProps', ()=> {

      expect(
        JSON.stringify( {
          showLoader: false,
          disabled: false,
          block: false,
          srOnly: false
        } )
      ).toEqual( JSON.stringify( defaultProps ) );
    } );

    it( 'an instance of Button should have the proper propTypes set', () => {
      expect( Button.propTypes ).toBe( propTypes );
    } );

    it( 'an intance of Button should have the proper defaultProps', () => {
      expect( Button.defaultProps ).toBe( defaultProps );
    } );

  } );

  describe( 'integration tests', () => {

  } );

  describe( 'unit tests', () => {
    let component = shallow( <Button/> );
    it( 'renders a button with the default props', () => {

      expect( component.closest( 'button' ).is( '[disabled]' ) ).toBe( false );
      expect( component.closest( 'button' ).is( '[showLoader]' ) ).toBe( false );
      expect( component.closest( 'button' ).is( '[block]' ) ).toBe( false );
      expect( component.closest( 'button' ).is( '[srOnly]' ) ).toBe( false );



    } )

    it( 'should render all the aria attributes when props are passed to it', () => {
      const props = {
        showLoader:true,
        disabled: true,
        block: true,
        srOnly: true
      };

      const component = shallow( <Button { ...props } /> );
      expect( component.closest( 'button' ).is( '[disabled]' ) ).toBe( true );
      expect( component.closest( 'button' ).is( '[showLoader]' ) ).toBe( true );
      expect( component.closest( 'button' ).is( '[block]' ) ).toBe( true );
      expect( component.closest( 'button' ).is( '[srOnly]' ) ).toBe( true );
    } );


    it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button type='submit' /> );
      expect( component.find( 'button' ).props().type ).toEqual( 'submit' );
    } );

    it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button type='button' /> );
      expect( component.find( 'button' ).props().type ).toEqual( 'button' );
    } );

    it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button type='reset' /> );
      expect( component.find( 'button' ).props().type ).toEqual( 'reset' );
    } );
      
      it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button btnStyle='primary' /> );
      expect( component.find( 'button' ).props().btnStyle ).toEqual( 'primary' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button btnStyle='secondary' /> );
      expect( component.find( 'button' ).props().btnStyle ).toEqual( 'secondary' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button btnStyle='tertiary' /> );
      expect( component.find( 'button' ).props().btnStyle ).toEqual( 'tertiary' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button btnStyle='ghost' /> );
      expect( component.find( 'button' ).props().btnStyle ).toEqual( 'ghost' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button btnStyle='icon' /> );
      expect( component.find( 'button' ).props().btnStyle ).toEqual( 'icon' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button btnStyle='link' /> );
      expect( component.find( 'button' ).props().btnStyle ).toEqual( 'link' );
    } );
      
       it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button size='small' /> );
      expect( component.find( 'button' ).props().size ).toEqual( 'small' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button size='medium' /> );
      expect( component.find( 'button' ).props().size ).toEqual( 'medium' );
    } );
    
     it( 'renders the btnType  as the type attribute of the element', () => {
      component = mount( <Button size='large' /> );
      expect( component.find( 'button' ).props().size ).toEqual( 'large' );
    } );
    
    
    it('check props class displayed', () => {  
      component = mount( <Button class='button' /> );
      expect( component.find( 'button' ).props().class ).toEqual( 'button' );
    });
    
    it('render button correctly with null value', () => {  
      component = mount( <Button size='null' /> );
      expect( component.find( 'button' ).props().size ).toEqual( null );
    
  } );


} );
  
describe( 'snapshot tests', () => {
  it( 'renders correctly with the default props', () => {
    const buttonComponent = renderer
      .create( <Button /> )
      .toJSON();
    expect( buttonComponent ).toMatchSnapshot();
  } );
  
  it('check the props displayed', () => {  
    const buttnComponent = renderer
      .create( <Button class='reset' /> )
      .toJSON();
   expect( buttnComponent ).toMatchSnapshot();
  });

  it( 'renders correctly with the `type` property set', () => {
    const buttnComponent = renderer
      .create( <Button type='submit' /> )
      .toJSON();
    expect( buttnComponent ).toMatchSnapshot();
  } );
  
  it( 'renders correctly with the `type` property set', () => {
    const buttnComponent = renderer
      .create( <Button type='reset' /> )
      .toJSON();
    expect( buttnComponent ).toMatchSnapshot();
  } );
  
  it( 'renders correctly with the `type` property set', () => {
    const buttnComponent = renderer
      .create( <Button type='button' /> )
      .toJSON();
    expect( buttnComponent ).toMatchSnapshot();
  } );



  it( 'renders correctly with the `children` property set', () => {
    const buttonComponent = renderer
      .create( <Button children='Button component' /> )
      .toJSON();
    expect( buttonComponent ).toMatchSnapshot();
  } );
  
  it('reners with all props every time', () => {
  const buttonComponent = renderer
      .create( <Button btnStyle='primary'
                size: 'small'
                block: true,
                disabled: true,
                showLoader: true,
                tabIndex: '1',
                id: 'buttonComponent',
                dataNavDescription: 'button description,
                ariaPressed: true,
                ariaLabel: true,
                ariaSelected: true,
                ariaControls: 'aria',
                srOnly: true
              /> )
      .toJSON();  
      expect(user).toMatchSnapshot();
  });

} );




