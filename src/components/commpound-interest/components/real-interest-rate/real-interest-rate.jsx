import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    GrowthRate,
    CorrespondingRealInterestRate,
    EquivalentNominalInterestRate
} from './components';

const RealInterestRate = () => {
  const options = [
      { value: 'growthRate', label: '14. Визначити множник нарощення' },
      { value: 'correspondingRealInterestRate', label: '15. Знайти реальну номінальну ставку відповідну до заданої номінальної ставки' },
      { value: 'equivalentNominalInterestRate', label: '16. Визначити величину номінальної ставки яка беззбитково заміняє іншу ставку' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = option => setSelectedOption(option);

  const renderForm = () => {
      const { value } = selectedOption;
      switch (value) {
          case 'growthRate':
              return <GrowthRate />;
          case 'correspondingRealInterestRate':
              return <CorrespondingRealInterestRate />;
          case 'equivalentNominalInterestRate':
              return <EquivalentNominalInterestRate />;
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

export default RealInterestRate;
