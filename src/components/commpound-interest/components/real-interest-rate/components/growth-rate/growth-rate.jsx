import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    nominalInterestRate: 15,
    durationInYears: 3,
    numberOfCompounding: 4, // кількість нарахувань у році
    result: ''
};

const GrowthRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateGrowthRate = form => {
        const { nominalInterestRate: j, durationInYears: n, numberOfCompounding: m  } = form;

        const S = (1 + ((j / 100) / m))**(m * n);

        setValue('result', S.toFixed(5));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateGrowthRate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Множник нарощення</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='nominalInterestRate'
                    label='Номінальна ставка відсотка'
                    placeholder='Номінальна ставка відсотка'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='durationInYears'
                    label='Тривалість договору (у роках)'
                    placeholder='Тривалість договору (у роках)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='numberOfCompounding'
                    label='Кількість виплат у році'
                    placeholder='Кількість виплат у році'
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
                    label='Множник нарощення'
                    placeholder='Множник нарощення'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default GrowthRate;
