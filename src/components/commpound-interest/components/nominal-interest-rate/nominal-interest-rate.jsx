import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { getDatesDifferenceInMonths } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 100000,
    startDate: new Date('04/24/2019'),
    endDate: new Date('11/25/2021'),
    percentages: 22,
    numberOfCompounding: 4, // кількість нарахувань у році
    result: '',
    result_hybrid: ''
};

const NominalInterestRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateNominalInterestRate = form => {
        const { loan: P, percentages: j, numberOfCompounding: m, startDate, endDate } = form;

        const n = getDatesDifferenceInMonths(startDate, endDate); // термін у місяцях
        console.log(n);
        const periods = n / (12 / m);

        const S = P * (1 + (j / 100) / m)**periods;

        setValue('result', S.toFixed(2));

        // Hybrid method (formula 20)

        const c = Math.trunc(periods);             // integer part of a periods
        const d = (periods - Math.trunc(periods)); // float part of a periods

        const S_hybrid = P * (1 + (j / 100) / m)**c * (1 + d * (j / 100) / m);

        setValue('result_hybrid', S_hybrid.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateNominalInterestRate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Номінальна відсоткова ставка</h2>

            <span className={styles.textBlock}>
                Якою буде величина заборгованості через 31 місяць, якщо на початку терміну вона становила 100 000 грн., відсотки 
                нараховувались складні за ставкою 22% річних, нарахування відбувались поквартально.
            </span>

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
                    name='numberOfCompounding'
                    label='Кількість виплат у році'
                    placeholder='Кількість виплат у році'
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

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='result_hybrid'
                    label='Гібридний метод'
                    placeholder='Гібридний метод'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default NominalInterestRate;
