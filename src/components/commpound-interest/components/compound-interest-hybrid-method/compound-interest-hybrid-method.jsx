import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { getDatesDifference } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 300000,
    startDate: new Date('06/24/2019'),
    endDate: new Date('11/25/2021'),
    percentages: 25,
    result_hybrid_method: '',
    result_simple_method: ''
};

const CompoundInterestHybridMethod = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateCompoundInterestHybridMethod = form => {
        const { loan: P, percentages: i, startDate, endDate } = form;

        const t = (getDatesDifference(startDate, endDate) / 365).toFixed(4); // number of years

        const c = Math.trunc(t);     // integer part of a t
        const d = (t - Math.trunc(t)).toFixed(4); // float part of a t

        const S = (P * (1 + (i / 100)) ** c) * (1 + d * (i / 100));

        setValue('result_hybrid_method', S.toFixed(2));

        const I = P * (1 + (i / 100))**t;

        setValue('result_simple_method', I.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateCompoundInterestHybridMethod)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Змішаний метод vs Простий метод</h2>

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
                    name='result_hybrid_method'
                    label='Змішаний метод'
                    placeholder='Змішаний метод'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='result_simple_method'
                    label='Простий метод'
                    placeholder='Простий метод'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CompoundInterestHybridMethod;
