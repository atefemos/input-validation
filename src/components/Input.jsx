import React, { useState } from 'react'
import { validate } from '../utils/validators'

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID',
}

const Input = ({ label, id, type, validators, errorText }) => {
  const [valid, setvalid] = useState(true)
  const [status, setstatus] = useState(false)

  const handleChange = (e) => {
    if (status) {
      setvalid(validate(e.target.value, validators));
      console.log(valid);
    }
  }

  const handleBlure = (e) => {
    setvalid((validate(e.target.value, validators)));
    setstatus(true)
  }

  
  return (
    <div className={`form-input ${!valid && "form-input--invalid"}`} data-testid="form-input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={handleChange} onBlur={handleBlure} required/>
     {!valid && <p>{errorText}</p>} 
    </div>
  )
}

export default Input