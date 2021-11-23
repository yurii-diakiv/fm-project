import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { Periods } from '../common';

import { getDatesDifference } from 'helpers';

import styles from 'components/form-styles.module.scss';

const emptyPeriod = { startDate: new Date(), endDate: new Date(), percentages: 0 };

const DEFAULT_VALUES = {
    percentages: 15,
    periods: [
        { date: new Date('02/05/2021'), income: 120000, balance: 0, duration: 0, percentages: 0 },
        { date: new Date('07/10/2021'), income: -40000, balance: 0, duration: 0, percentages: 0 },
        { date: new Date('10/20/2021'), income: 80000, balance: 0, duration: 0, percentages: 0 },
        { date: new Date('12/31/2021'), income: 0, balance: 0, duration: 0, percentages: 0 },
    ],
    accruedInterest: ''
};

const SimpleInterestDynamicDeposit = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { percentages, periods } = form;

        setValue('periods.0.balance', periods[0].income);
        setValue(`periods.0.duration`, getDatesDifference(periods[0].date, periods[1].date));
        setValue(`periods.0.percentages`, periods[0].balance * periods[0].duration);

        for (let i = 1; i < periods.length; i++) {
            setValue(`periods.${i}.balance`, periods[i - 1].balance + periods[i].income);
            if (periods[i + 1]) {
                setValue(`periods.${i}.duration`, getDatesDifference(periods[i].date, periods[i + 1].date));
            }
            setValue(`periods.${i}.percentages`, periods[i].balance * periods[i].duration);
        }

        const d = (365 / percentages).toFixed(2);
        const I = periods.map(period => period.percentages).reduce((a, b) => a + b, 0) / 100 / d;

        setValue('accruedInterest', I.toFixed(2));
    };

    const Period = ({ index }) => (
        <>
            <div className={styles.inlineElement}>
                <FormField
                    component={DatePicker}
                    name={`periods.${index}.date`}
                    label='Дата'
                    placeholder='Дата'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.income`}
                    label='Рух коштів'
                    placeholder='Рух коштів'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.balance`}
                    label='Залишок'
                    placeholder='Залишок'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.duration`}
                    label='Термін'
                    placeholder='Термін'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.percentages`}
                    label='Процентне число'
                    placeholder='Процентне число'
                    disabled
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
            <h2 className={styles.title}>Прості відсотки (динамічний депозит)</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='percentages'
                    label='Відсоткова ставка'
                    placeholder='Відсоткова ставка'
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
                    name='accruedInterest'
                    label='Нарощені відсотки'
                    placeholder='Нарощені відсотки'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default SimpleInterestDynamicDeposit;
