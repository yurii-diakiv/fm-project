import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    cost: 1000,
    duration: 3,
    payment: 1500,
    profit: ''
};

const CompoundInterestRatesProfit = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { payment, cost, duration } = form;

        const i = ((payment / cost) ** (1 / duration) - 1) * 100;

        setValue('profit', i.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Складні відсоткові ставки (прибуток)</h2>

            <span className={styles.textBlock}>
                Вартість сертифікату 1 000 грн. За умови трирічного його зберігання виплачується 1 500 грн., 
                п'ятирічного - 2 000 грн. Визначити прибутковість вкладання коштів у сертифікат для кредитора 
                у вигляді складної річної ставки відсотків.
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='cost'
                    label='Вартість сертифікату'
                    placeholder='Вартість сертифікату'
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

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='payment'
                    label='Виплата'
                    placeholder='Виплата'
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
                    name='profit'
                    label='Прибутковість'
                    placeholder='Прибутковість'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CompoundInterestRatesProfit;
