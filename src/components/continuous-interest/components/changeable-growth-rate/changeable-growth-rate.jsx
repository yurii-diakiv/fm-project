import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    LinearInterestRate,
    ExponentialInterestRate
} from './components';

const ChangeableGrowthRate = () => {
  const options = [
      { value: 'linearInterestRate', label: '30. Відсоткова ставка зростає лінійно і неперервно' },
      { value: 'exponentialInterestRate', label: '31. Відсоткова ставка неперервно зростає по експоненті' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = option => setSelectedOption(option);

  const renderForm = () => {
      const { value } = selectedOption;
      switch (value) {
          case 'linearInterestRate':
              return <LinearInterestRate />;
          case 'exponentialInterestRate':
              return <ExponentialInterestRate />;
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

export default ChangeableGrowthRate;
