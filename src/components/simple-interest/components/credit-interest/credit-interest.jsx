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

const CreditInterest = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { credit: P, duration: n, m, percentages: i } = form;

        const S = P * (1 + n * i / 100);
        const R = S / (n * m);

        setValue('result', S.toFixed(2));
        setValue('monthlyPayment', R.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Відсотки у користувацькому кредиті</h2>

            <span className={styles.textBlock}>
                Банк відкриває клієнту кредит для купівлі побутової техніки вартістю 100 000 грн. Термін кредитування 
                становить три роки, відсоткова ставка - 15% річних, виплати за кредитом відбуваються в кінці кожного місяця. 
                Визначити суму, яку повертає боржник та величину разової щомісячної виплати.
            </span>

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
                    disabled
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
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CreditInterest;
