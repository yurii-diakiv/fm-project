import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 100000,
    loanToPay: 120000,
    duration: 150,
    percentageRates: '',
    discountRates: ''
};

const SimpleInterstRates = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { loan, loanToPay, duration } = form;

        const i = ((loanToPay - loan) / (duration * loan)) * 366 * 100;
        const d = ((loanToPay - loan) / (duration * loanToPay)) * 360 * 100;

        setValue('percentageRates', i.toFixed(2));
        setValue('discountRates', d.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Прості відсоткові ставки</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='loan'
                    label='Сума боргу'
                    placeholder='Сума боргу'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='loanToPay'
                    label='Борг, який потрібно погасити'
                    placeholder='Борг, який потрібно погасити'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='duration'
                    label='Термін'
                    placeholder='Термін'
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
                    name='percentageRates'
                    label='Відсоткова ставка'
                    placeholder='Відсоткова ставка'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='discountRates'
                    label='Облікова ставка'
                    placeholder='Облікова ставка'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default SimpleInterstRates;
