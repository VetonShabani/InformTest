import React from 'react';
import './form-input.style.scss';

const  FormInput = ({handleChange, label, ...otherProps}) => {
    
    return (
        <div className="input-wrapper">
            <input className='form-input' {...otherProps}  onChange={handleChange}  />
            {label ? 
                <label 
                className={`${
                otherProps.value !== '' ? 'shrink' : ''
                } form-input-label`} 
                htmlFor={label}>
                {label}
                </label>
                :
                ''
            }
        </div>
    );
}
 
export default FormInput;

// 