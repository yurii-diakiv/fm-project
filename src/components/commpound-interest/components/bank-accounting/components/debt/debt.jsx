import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    sum: 50000,
    duration: 5,
    discountRate: 17,
    debtAmount: ''
};

const Debt = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateDebt = form => {
        const { sum: P, duration: n, discountRate: d } = form;

        const debtAmount = P / ((1 - d / 100)**n).toFixed(6);

        setValue('debtAmount', debtAmount.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateDebt)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Знайти нарощену суму боргу</h2>

            <span className={styles.textBlock}>
                Використовуючи складну річну облікову ставку 17%, знайти нарощену суму боргу, 
                якщо початкова сума 50 000 грн., термін погашення 5 років.
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='sum'
                    label='Сума'
                    placeholder='Сума'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='duration'
                    label='Термін погашення (у роках)'
                    placeholder='Термін погашення (у роках)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='discountRate'
                    label='Складна облікова ставка'
                    placeholder='Складна облікова ставка'
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
                    name='debtAmount'
                    label='Нарощена сума боргу'
                    placeholder='Нарощена сума боргу'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default Debt;
