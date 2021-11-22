import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 100000,
    durationInMonths: 31,
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
        const { loan: P, percentages: j, durationInMonths: n, numberOfCompounding: m  } = form;

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
            <h2 className={styles.title}>Математичне дисконтування</h2>

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
                    label='Відсотки'
                    placeholder='Відсотки'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='durationInMonths'
                    label='Тривалість договору (у місяцях)'
                    placeholder='Тривалість договору (у місяцях)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
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
