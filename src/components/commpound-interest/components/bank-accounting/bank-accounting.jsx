import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    Discount,
    DiscountWithPeriods,
    Debt
} from './components';

const BankAccounting = () => {
  const options = [
      { value: 'discount', label: '19. Визначити вартість дисконту' },
      { value: 'discountWithPeriods', label: '20-21. Визначити вартість дисконту, якщо застосовувалося дисконтування' },
      { value: 'debt', label: '22. Знайти нарощену суму боргу' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = option => setSelectedOption(option);

  const renderForm = () => {
      const { value } = selectedOption;
      switch (value) {
          case 'discount':
              return <Discount />;
          case 'discountWithPeriods':
              return <DiscountWithPeriods />;
          case 'debt':
              return <Debt />;
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

export default BankAccounting;
