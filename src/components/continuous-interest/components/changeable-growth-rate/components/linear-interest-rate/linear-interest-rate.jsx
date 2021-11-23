import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    initialGrowthRate: 3,
    percentages: 3,
    duration: 7,        
    result: ''
};

const LinearInterestRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateLinearInterestRate = form => {
        const { initialGrowthRate: sigma, percentages: a, duration: n } = form;

        const result = Math.E**((sigma / 100) * 7 + ((a / 100) * n**2 / 2));

        setValue('result', result.toFixed(3));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateLinearInterestRate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Відсоткова ставка зростає лінійно і неперервно</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='initialGrowthRate'
                    label='Початкове значення сили росту'
                    placeholder='Початкове значення сили росту'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='percentages'
                    label='Відсоткова ставка'
                    placeholder='Відсоткова ставка'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='duration'
                    label='Термін (у роках)'
                    placeholder='Термін (у роках)'
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

export default LinearInterestRate;
