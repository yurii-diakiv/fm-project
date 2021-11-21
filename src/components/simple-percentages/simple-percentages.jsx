import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    SimplePercentagesFormula,
    SimplePercentagesFormulaFractionalN,
    SimplePercentagesFormulaPeriods
} from './components';

const SimplePercentages = () => {
    const options = [
        { value: 'simplePercentagesFormula', label: 'Формула простих відсотків' },
        { value: 'simplePercentagesFormulaFractionalN', label: 'Формула простих відсотків (дробове n)' },
        { value: 'simplePercentagesFormulaPeriods', label: 'Формула простих відсотків (різні періоди)' },
        // { value: 'simplePercentagesFormulaReinvestment', label: 'Формула простих відсотків (з реінвестуванням)' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = option => setSelectedOption(option);

    const renderForm = () => {
        const { value } = selectedOption;
        switch (value) {
            case 'simplePercentagesFormula':
                return <SimplePercentagesFormula />;
            case 'simplePercentagesFormulaFractionalN':
                return <SimplePercentagesFormulaFractionalN />;
            case 'simplePercentagesFormulaPeriods':
                return <SimplePercentagesFormulaPeriods />;
            default:
                return;
            // case 'simplePercentagesFormulaReinvestment':
            //     return;
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

export default SimplePercentages;
