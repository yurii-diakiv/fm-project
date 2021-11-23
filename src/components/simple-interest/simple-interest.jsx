import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    SimpleInterest as SimpleInterestFormula,
    SimpleInterestFractionalN,
    SimpleInterestPeriods,
    SimpleInterestReinvestment,
    CreditInterest,
    MathematicalDiscounting,
    BankAccounting,
    BankAccountingFractionalN,
    SimpleInterestDynamicDeposit
} from './components';

const SimpleInterest = () => {
    const options = [
        { value: 'simpleInterest', label: '1. Прості відсотки' },
        { value: 'simpleInterestFractionalN', label: '2. Прості відсотки (дробове n)' },
        { value: 'simpleInterestPeriods', label: '3. Прості відсотки (різні періоди)' },
        { value: 'simpleInterestReinvestment', label: '4. Прості відсотки (з реінвестуванням)' },
        { value: 'simpleInterestDynamicDeposit', label: '5. Прості відотки (динамічний депозит)' },
        { value: 'creditInterest', label: '6. Відсотки у користувацькому кредиті' },
        { value: 'mathematicalDiscounting', label: '7. Математичне дисконтування' },
        { value: 'bankAccounting', label: '8. Банківський облік' },
        { value: 'bankAccountingFractionalN', label: '9. Банківський облік (дробове n)' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = option => setSelectedOption(option);

    const renderForm = () => {
        const { value } = selectedOption;
        switch (value) {
            case 'simpleInterest':
                return <SimpleInterestFormula />;
            case 'simpleInterestFractionalN':
                return <SimpleInterestFractionalN />;
            case 'simpleInterestPeriods':
                return <SimpleInterestPeriods />;
            case 'simpleInterestReinvestment':
                return <SimpleInterestReinvestment />;
            case 'creditInterest':
                return <CreditInterest />;
            case 'mathematicalDiscounting':
                return <MathematicalDiscounting />;
            case 'bankAccounting':
                return <BankAccounting />;
            case 'bankAccountingFractionalN':
                return <BankAccountingFractionalN />;
            case 'simpleInterestDynamicDeposit':
                return <SimpleInterestDynamicDeposit />;
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

export default SimpleInterest;
