import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    AccuredSum,
    CurrentValueOfSum
} from './components';

const ConstantGrowthRate = () => {
  const options = [
      { value: 'accuredSum', label: '28. Визначити нарощену суму' },
      { value: 'currentValueOfSum', label: '29. Визначити сучасну вартість отриманої за борг суми' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = option => setSelectedOption(option);

  const renderForm = () => {
      const { value } = selectedOption;
      switch (value) {
          case 'accuredSum':
              return <AccuredSum />;
          case 'currentValueOfSum':
              return <CurrentValueOfSum />;
          default:
              return;
      }
  }

  return (
      <>
          <Select
              label='Задача'
              defaultValue={selectedOption}
              options={options}
              onChange={handleSelectChange}
          />
          {renderForm()}
      </>
  )
};

export default ConstantGrowthRate;
