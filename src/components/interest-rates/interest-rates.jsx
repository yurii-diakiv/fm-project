import React, { useState } from 'react';
import { Select } from 'components/common';
import {
    SimpleInterestRates,
    SimpleInterestRatesDuration,
    CompoundInterestRates,
    CompoundInterestRatesProfit,
    CompoundDiscountRates
} from './components';

const PercentageRates = () => {
    const options = [
        { value: 'simpleInterestRates', label: '23. Прості відсоткові ставки' },
        { value: 'simpleInterestRatesDuration', label: '24. Прості відсоткові ставки (невідомий термін)' },
        { value: 'compoundInterestRates', label: '25. Складні відсоткові ставки' },
        { value: 'compoundInterestRatesProfit', label: '26.Складні відсоткові ставки (прибуток)' },
        { value: 'compoundDiscountRates', label: '27. Складні облікові ставкии' },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = option => setSelectedOption(option);

    const renderForm = () => {
        const { value } = selectedOption;
        switch (value) {
            case 'simpleInterestRates':
                return <SimpleInterestRates />;
            case 'simpleInterestRatesDuration':
                return <SimpleInterestRatesDuration />;
            case 'compoundInterestRates':
                return <CompoundInterestRates />;
            case 'compoundInterestRatesProfit':
                return <CompoundInterestRatesProfit />;
            case 'compoundDiscountRates':
                return <CompoundDiscountRates />;
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

export default PercentageRates;
