import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { Periods } from '../common';
import { getDatesDifference } from 'helpers';

import styles from 'components/form-styles.module.scss';

const emptyPeriod = { startDate: new Date(), endDate: new Date(), percentages: 0 };

const DEFAULT_VALUES = {
    loan: 1000,
    periods: [
        { startDate: new Date('01/01/2020'), endDate: new Date('02/01/2020'), percentages: 10 },
        { startDate: new Date('02/01/2020'), endDate: new Date('03/01/2020'), percentages: 10 },
        { startDate: new Date('03/01/2020'), endDate: new Date('04/01/2020'), percentages: 10 },
    ],
    result: ''
};

const SimpleInterestReinvestment = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { loan: P, periods } = form;

        const S = (periods.map(period =>
            1 + getDatesDifference(period.startDate, period.endDate) / 366 * period.percentages / 100)
            .reduce((a, b) => a * b) * P);

        setValue('result', S.toFixed(2));
    };

    const Period = ({ index }) => (
        <>
            <div className={styles.inlineElement}>
                <FormField
                    component={DatePicker}
                    name={`periods.${index}.startDate`}
                    label='Початок'
                    placeholder='Початок'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={DatePicker}
                    name={`periods.${index}.endDate`}
                    label='Кінець'
                    placeholder='Кінець'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.percentages`}
                    label='Відсотки'
                    placeholder='Відсотки'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </>
    );

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Прості відсотки (з реінвестуванням)</h2>

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

            <Periods control={control} emptyPeriod={emptyPeriod} name='periods' period={Period} />

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
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default SimpleInterestReinvestment;
