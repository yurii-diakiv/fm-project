import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    CompoundInterestFormula
} from './components';

const CompoundInterest = () => {
    const options = [
        { value: 'compoundInterestFormula', label: 'Формула складних відсотків' },
        { value: 'compoundInterestFormula', label: 'Номінальна ставка відсотка' },
        { value: 'compoundInterestFormula', label: 'Ефективна відсоткова ставка' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = option => setSelectedOption(option);

    const renderForm = () => {
        const { value } = selectedOption;
        switch (value) {
            case 'compoundInterestFormula':
                return <CompoundInterestFormula />;
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

export default CompoundInterest;
