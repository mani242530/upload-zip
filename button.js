import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classNames from 'classnames';


const propTypes = {
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
  analyticsEvent: PropTypes.object, // see SamplesList.jsx for data object implementation
  componentMountedHandler: PropTypes.func,
  ariaPressed: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaSelected: PropTypes.bool,
  ariaControls: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  srOnly: PropTypes.bool


}

const defaultProps = {
  showLoader: false,
  disabled: false,
  block: false,
  srOnly: false
}

const Button = (props) => {

  useEffect(() => {
    if( props.componentMountedHandler ){
      props.componentMountedHandler();
    }
  })

  return (
    <button
        { ...( props.dataNavDescription && { 'data-nav-description': props.dataNavDescription } ) }
        { ...( props.id && { id: props.id } ) }
        { ...( props.ariaSelected && { 'aria-selected' : props.ariaSelected } ) }
        { ...( props.ariaPressed && { 'aria-pressed' : props.ariaPressed } ) }
        { ...( props.ariaControls && { 'aria-controls' : props.ariaControls } ) }
        { ...( props.ariaLabel && { 'aria-label' : props.ariaLabel } ) }
        { ...( props.onFocus && { onFocus: props.onFocus } ) }
        { ...( props.onBlur && { onBlur: props.onBlur } ) }
        { ...( props.type && { type: props.type } ) }
        { ...( props.tabIndex && { tabIndex: props.tabIndex } ) }
        { ...( props.disabled && { 'disabled': props.showLoader || props.disabled } ) }

        className={
          classNames( 'Button', {
            [`Button__${props.btnStyle}`]: props.btnStyle,
            [`Button--${props.size}`]: props.size,
            'Button--block': props.block,
            'sr-only': props.srOnly
          } )
        }

      
    >{props.text}</button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
