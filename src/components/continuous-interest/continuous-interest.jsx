import React, { useState } from 'react';
import { Select } from 'components/common';
import {
  ConstantGrowthRate,
  ChangeableGrowthRate
} from './components';

const ContinuousInterest = () => {
    const options = [
        { value: 'constantGrowthRate', label: '28-29. Постійна сила росту' },
        { value: 'changeableGrowthRate', label: '30-31. Змінна сила росту' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = option => setSelectedOption(option);

    const renderForm = () => {
        const { value } = selectedOption;
        switch (value) {
            case 'constantGrowthRate':
                return <ConstantGrowthRate />;
            case 'changeableGrowthRate':
                return <ChangeableGrowthRate />;
            default:
                return;
        }
    }

    return (
        <>
            <Select
                label='Формула'
                defaultValue={selectedOption}
                options={options}
                onChange={handleSelectChange}
            />
            {renderForm()}
        </>
    )
};

export default ContinuousInterest;
