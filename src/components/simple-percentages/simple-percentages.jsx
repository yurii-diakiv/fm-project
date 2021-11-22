import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    SimplePercentagesFormula,
    SimplePercentagesFormulaFractionalN,
    SimplePercentagesFormulaPeriods,
    SimplePercentagesFormulaReinvestment,
    CreditPercentages,
    MathematicalDiscounting,
    BankAccounting,
    BankAccountingFractionalN
} from './components';

const SimplePercentages = () => {
    const options = [
        { value: 'simplePercentagesFormula', label: '1. Формула простих відсотків' },
        { value: 'simplePercentagesFormulaFractionalN', label: '2. Формула простих відсотків (дробове n)' },
        { value: 'simplePercentagesFormulaPeriods', label: '3. Формула простих відсотків (різні періоди)' },
        { value: 'simplePercentagesFormulaReinvestment', label: '4. Формула простих відсотків (з реінвестуванням)' },
        //5 приклад
        { value: 'creditPercentages', label: '6. Відсотки у користувацькому кредиті' },
        { value: 'mathematicalDiscounting', label: '7. Математичне дисконтування' },
        { value: 'bankAccounting', label: '8. Банківський облік' },
        { value: 'bankAccountingFractionalN', label: '9. Банківський облік (дробове n)' }
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
            case 'simplePercentagesFormulaReinvestment':
                return <SimplePercentagesFormulaReinvestment />;
            case 'creditPercentages':
                return <CreditPercentages />;
            case 'mathematicalDiscounting':
                return <MathematicalDiscounting />;
            case 'bankAccounting':
                return <BankAccounting />;
            case 'bankAccountingFractionalN':
                return <BankAccountingFractionalN />;
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

export default SimplePercentages;
