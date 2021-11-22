import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';
import { Periods } from '../common';

import { getDatesDifference } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 10000,
    periods: [
        { startDate: new Date('01/01/2021'), endDate: new Date('04/01/2021'), percentages: 15 },
        { startDate: new Date('04/01/2021'), endDate: new Date('07/01/2021'), percentages: 20 },
        { startDate: new Date('07/01/2021'), endDate: new Date('10/01/2021'), percentages: 25 },
        { startDate: new Date('10/01/2021'), endDate: new Date('01/01/2022'), percentages: 30 }
    ],
    coeff: '',
    result: ''
};

const SimplePercentagesFormulaPeriods = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { loan: P, periods } = form;

        const startDate = periods[0].startDate;
        const endDate = periods.at(-1).endDate;
        const allDays = getDatesDifference(startDate, endDate);

        const coeff = (periods.map(period =>
            getDatesDifference(period.startDate, period.endDate) / allDays * period.percentages / 100)
            .reduce((a, b) => a + b, 0) + 1).toFixed(3);

        const S = P * coeff;

        setValue('coeff', coeff);
        setValue('result', S.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Формула простих відсотків (різні періоди)</h2>

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
                    name='coeff'
                    label='Множник нарощення'
                    placeholder='Множник нарощення'
                    type='text'
                    color='gray-light'
                    control={control}
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

export default SimplePercentagesFormulaPeriods;
