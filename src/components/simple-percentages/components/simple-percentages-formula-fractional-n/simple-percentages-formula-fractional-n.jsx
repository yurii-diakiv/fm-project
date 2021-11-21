import { useForm } from 'react-hook-form';
import { Button, TextInput, DatePicker, Select, FormField } from 'components/common';

import { getDatesDifference, roundTo5 } from 'helpers';

import styles from 'components/form-styles.module.scss';

const options = [
    { value: '1', label: '365/365' },
    { value: '2', label: '365/360' },
    { value: '3', label: '360/360' }
];

const DEFAULT_VALUES = {
    method: options[0],
    loan: 100000,       //P
    startDate: new Date('01/20/2021'),
    endDate: new Date('10/05/2021'),
    percentages: 25,    //i
    result: ''
};

const SimplePercentagesFormulaFractionalN = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { loan: P, percentages: i, startDate, endDate, method } = form;

        const calculateN = (method, t) => {
            if (method === '1') return t / 365;     // method 365/365
            if (method === '2') return t / 360;     // method 365/360
            return roundTo5(t) / 360;               // method 360/360
        };

        const t = getDatesDifference(startDate, endDate); // number of days
        const n = calculateN(method.value, t);
        const S = P * (1 + n * i / 100);

        setValue('result', S.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Формула простих відсотків (дробове n)</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={Select}
                    name='method'
                    label='Метод'
                    placeholder='Метод'
                    options={options}
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='loan'
                    label='Позика'
                    placeholder='Позика'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineBlock}>
                <div style={{ width: '47.5%' }}>
                    <FormField
                        component={DatePicker}
                        name='startDate'
                        label='Початок'
                        placeholder='Початок'
                        control={control}
                    />
                </div>

                <div style={{ width: '47.5%' }}>
                    <FormField
                        component={DatePicker}
                        name='endDate'
                        label='Кінець'
                        placeholder='Кінець'
                        control={control}
                    />
                </div>
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='percentages'
                    label='Відсотки'
                    placeholder='Відсотки'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.submitBtn}>
                <Button
                    label='Обчислити'
                    type='submit'
                    color='primary'
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='result'
                    label='Результат'
                    placeholder='Результат'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default SimplePercentagesFormulaFractionalN;
