import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';
import { PeriodsInYears } from '../common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 50000,
    percentages: 15,
    periods: [
        { durationInYears: 2, margin: 3 },
        { durationInYears: 4, margin: 4 },
    ],
    result: ''
};

const CompoundInterestFormulaPeriods = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { loan: P, percentages: i, periods } = form;

        let accumulator = 1;
        for (let index = 0; index < periods.length; index++) {
          const currentIterationResult = (1 + (i / 100) + (periods[index].margin / 100))**periods[index].durationInYears;
          accumulator *= currentIterationResult.toFixed(5);
        }

        const S = P * accumulator;

        setValue('result', S.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Формула складних відсотків (різні періоди + маржа)</h2>

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

            <PeriodsInYears control={control} name='periods' />

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

export default CompoundInterestFormulaPeriods;
