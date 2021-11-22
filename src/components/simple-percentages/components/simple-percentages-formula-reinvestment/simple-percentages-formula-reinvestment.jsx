import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';
import { Periods } from '../common';
import { getDatesDifference } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 1000,
    periods: [
        { startDate: new Date('01/01/2020'), endDate: new Date('02/01/2020'), percentages: 10 },
        { startDate: new Date('02/01/2020'), endDate: new Date('03/01/2020'), percentages: 10 },
        { startDate: new Date('03/01/2020'), endDate: new Date('04/01/2020'), percentages: 10 },
    ],
    result: ''
};

const SimplePercentagesFormulaReinvestment = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { loan: P, periods } = form;

        const S = (periods.map(period =>
            1 + getDatesDifference(period.startDate, period.endDate) / 366 * period.percentages / 100)
            .reduce((a, b) => a * b) * P);

        setValue('result', S.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Формула простих відсотків (з реінвестуванням)</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='loan'
                    label='Початковий вклад'
                    placeholder='Початковий вклад'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <Periods control={control} name='periods' />

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

export default SimplePercentagesFormulaReinvestment;
