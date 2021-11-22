import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { getDatesDifferenceInYears } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    initialCost: 10000,
    startDate: new Date('11/25/2018'),
    endDate: new Date('11/25/2021'),
    percentages: 30,
    numberOfDiscountsPerYear: 4,
    result: '',
    discountedResult: ''
};

const MathematicalDiscounting = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateMathematicalDiscounting = form => {
        const { initialCost: S, percentages: i, numberOfDiscountsPerYear: m, startDate, endDate } = form;

        const n = getDatesDifferenceInYears(startDate, endDate); // number of years
        const P = S / (1 + i / 100)**n;

        let S_discount = P;
        if (m >= 1) {
          S_discount = S / (1 + (i / 100) / m)**(m * n);
        }

        setValue('result', P.toFixed(2));
        setValue('discountedResult', S_discount.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateMathematicalDiscounting)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Математичне дисконтування</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='initialCost'
                    label='Початкова вартість'
                    placeholder='Початкова вартість'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineBlock}>
                <div className={styles.inlineElement}>
                    <FormField
                        component={DatePicker}
                        name='startDate'
                        label='Початок'
                        placeholder='Початок'
                        control={control}
                    />
                </div>

                <div className={styles.inlineElement}>
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
                    label='Складні відсотки'
                    placeholder='Складні відсотки'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='numberOfDiscountsPerYear'
                    label='Кількість дисконтувань у році'
                    placeholder='Кількість дисконтувань у році'
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
                    label='Сучасна вартість (без дизконтування)'
                    placeholder='Сучасна вартість (без дизконтування)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='discountedResult'
                    label='Сучасна вартість (Із дизконтуванням)'
                    placeholder='Сучасна вартість (Із дизконтуванням)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default MathematicalDiscounting;
