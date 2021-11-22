import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    credit: 100000,     //P
    duration: 3,        //n
    m: 12,
    percentages: 15,    //i
    monthlyPayment: '',
    result: ''
};

const CreditPercentages = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { credit: P, duration: n, m, percentages: i } = form;

        const S = P * (1 + n * i / 100);
        const R = S / (n * m);

        setValue('result', S.toFixed(2));
        setValue('monthlyPayment', R.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Відсотки у користувацькому кредиті</h2>

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
                    name='m'
                    label='Кількість виплат'
                    placeholder='Кількість виплат'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='percentages'
                    label='Відсотки'
                    placeholder='Відсотки'
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
                    name='monthlyPayment'
                    label='Щомісячна виплата'
                    placeholder='Щомісячна виплата'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CreditPercentages;
