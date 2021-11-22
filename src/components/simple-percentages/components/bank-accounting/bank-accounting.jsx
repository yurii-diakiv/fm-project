import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    credit: 100000,
    duration: 1,
    d: 15,
    discount: '',
    result: ''
};

const BankAccounting = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { credit: S, duration: n, d } = form;

        const P = S * (1 - n * d / 100);
        const D = S - P;

        setValue('result', S.toFixed(2));
        setValue('discount', D.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Банківський облік</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='credit'
                    label='Кредит'
                    placeholder='Кредит'
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
                    name='d'
                    label='Облікова ставка'
                    placeholder='Облікова ставка'
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
        </form>
    );
};

export default BankAccounting;
