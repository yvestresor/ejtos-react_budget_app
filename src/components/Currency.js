import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

  const options = [
    { value: '£', label: 'Uk(£)' },
    { value: '₹', label: 'India(₹)' },
    { value: '€', label: 'Europe(€)' },
    { value: 'CAD', label: 'Canada(CAD)' },
    { value: '$', label: 'Dollar($)' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'lightGreen',
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'white' : 'lightGreen',
      color: 'black',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor: 'lightGreen',
      color: 'white',
    }),
  };

  const handleChange = (selectedOption) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedOption.value,
    });
  };

  return (
        <div className='alert alert-secondary'>
            <Select options={options}
            styles={customStyles}
            onChange={handleChange}
            />	
    </div>
    );
};

export default Currency;