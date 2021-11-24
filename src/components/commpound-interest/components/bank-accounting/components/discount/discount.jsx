import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    sum: 100000,
    duration: 3.5,
    discountRate: 20,
    result: '',
    discount: ''
};

const Discount = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateDiscount = form => {
        const { sum: S, duration: n, discountRate: d } = form;

        const P = S * (1 - d / 100)**n;
        const D = S - P;

        setValue('result', P.toFixed(2));
        setValue('discount', D.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateDiscount)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Визначити вартість дисконту</h2>

            <span className={styles.textBlock}>
                Визначити вартість дисконту від продажу фінансового інструменту на суму 100 000 грн., якщо термін погашення 
                становить 3.5 року. При продажі застосовувалась складна облікова ставка 20% річних.
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

export default Discount;
