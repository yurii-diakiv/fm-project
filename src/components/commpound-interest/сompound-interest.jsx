import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    CompoundInterestFormula,
    CompoundInterestFormulaPeriods,
    CompoundInterestHybridMethod,
    NominalInterestRate,
    RealInterestRate,
    MathematicalDiscounting,
    BankAccounting
} from './components';

const CompoundInterest = () => {
    const options = [
        { value: 'compoundInterestFormula', label: '1. Формула складних відсотків' },
        { value: 'compoundInterestFormulaPeriods', label: '2. Формула складних відсотків (різні періоди + маржа)' },
        { value: 'compoundInterestHybridMethod', label: '3. Змішаний метод vs Простий метод' },
        { value: 'nominalInterestRate', label: '4. Номінальна відсоткова ставка' },
        { value: 'realInterestRate', label: '5. Реальна відсоткова ставка' },
        { value: 'mathematicalDiscounting', label: '6. Математичне дисконтування та облік за складними ставками відсотка' },
        { value: 'bankAccounting', label: '7. Облік за складною обліковою ставкою' }
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
            case 'realInterestRate':
                return <RealInterestRate />;
            case 'mathematicalDiscounting':
                return <MathematicalDiscounting />;
            case 'bankAccounting':
                return <BankAccounting />;
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
