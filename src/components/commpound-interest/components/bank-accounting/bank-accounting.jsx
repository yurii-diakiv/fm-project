import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    sum: 100000,
    duration: 3.5,
    discountRate: 20,
    numberOfDiscountsPerYear: 2,
    result: '',
    discount: '',
    effectiveDiscountRate: '',
    debtAmount: ''
};

const BankAccounting = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateBankAccounting = form => {
        const { sum: S, duration: n, discountRate: f, numberOfDiscountsPerYear: m } = form;

        let m_local = m;
        if (m < 1) { m_local = 1; }

        const P = S * (1 - f / 100 / m_local)**(m_local * n);
        const D = S - P;
        const d = (1 - (1 - f / 100 / m_local)**m_local) * 100;
        const debtAmount = S / (1 - f / 100 / m_local)**(m_local * n);

        setValue('result', P.toFixed(2));
        setValue('discount', D.toFixed(2));
        setValue('effectiveDiscountRate', d.toFixed(2));
        setValue('debtAmount', debtAmount.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateBankAccounting)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Банківський облік</h2>

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
                    name='discount'
                    label='Величина дисконту'
                    placeholder='Величина дисконту'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='effectiveDiscountRate'
                    label='Ефективна облікова ставка'
                    placeholder='Ефективна облікова ставка'
                    type='text'
                    color='gray-light'
                    control={control}
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

export default BankAccounting;
