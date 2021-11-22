import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    CompoundInterestFormula,
    CompoundInterestFormulaPeriods
} from './components';

const CompoundInterest = () => {
    const options = [
        { value: 'compoundInterestFormula', label: '1. Формула складних відсотків' },
        { value: 'compoundInterestFormulaPeriods', label: '2. Формула складних відсотків (різні періоди + маржа)' }
        // { value: 'compoundInterestFormula', label: 'Номінальна ставка відсотка' },
        // { value: 'compoundInterestFormula', label: 'Ефективна відсоткова ставка' }
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
