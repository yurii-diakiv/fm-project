import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    nominalInterestRate: 20,
    result_monthly: '',
    result_daily: ''
};

const CorrespondingRealInterestRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateCorrespondingRealInterestRate = form => {
        const { nominalInterestRate: j } = form;

        const m = {
          monthly: 12,
          daily: 365
        }

        const i_e_monthly = ((1 + ((j / 100) / m.monthly))**m.monthly - 1) * 100;  // щомісячна капіталізація
        const i_e_daily = ((1 + ((j / 100) / m.daily))**m.daily - 1) * 100;        // щоденна капіталізація

        setValue('result_monthly', i_e_monthly.toFixed(2));
        setValue('result_daily', i_e_daily.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateCorrespondingRealInterestRate)}
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
                    name='result_monthly'
                    label='Якщо капіталізація є щомісячною'
                    placeholder='Якщо капіталізація є щомісячною'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='result_daily'
                    label='Якщо капіталізація є щоденною'
                    placeholder='Якщо капіталізація є щоденною'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CorrespondingRealInterestRate;
