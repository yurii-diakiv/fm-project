import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    CompoundInterestFormula,
    CompoundInterestFormulaPeriods,
    CompoundInterestHybridMethod,
    NominalInterestRate
} from './components';

const CompoundInterest = () => {
    const options = [
        { value: 'compoundInterestFormula', label: '2.0. Формула складних відсотків' },
        { value: 'compoundInterestFormulaPeriods', label: '2.0.1. Формула складних відсотків (різні періоди + маржа)' },
        { value: 'compoundInterestHybridMethod', label: '2.0.2 Змішаний метод vs Простий метод' },
        { value: 'nominalInterestRate', label: '2.2. Номінальна відсоткова ставка' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = option => setSelectedOption(option);

    const renderForm = () => {
        const { value } = selectedOption;
        switch (value) {
            case 'compoundInterestFormula':
                return <CompoundInterestFormula />;
            case 'compoundInterestFormulaPeriods':
                return <CompoundInterestFormulaPeriods />;
            case 'compoundInterestHybridMethod':
                return <CompoundInterestHybridMethod />;
            case 'nominalInterestRate':
                return <NominalInterestRate />;
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
