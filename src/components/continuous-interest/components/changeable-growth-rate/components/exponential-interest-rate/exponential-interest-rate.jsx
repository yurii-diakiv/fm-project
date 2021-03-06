import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    initialGrowthRate: 5,
    percentages: 10,
    duration: 5,        
    result: ''
};

const ExponentialInterestRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateExponentialInterestRate = form => {
        const { initialGrowthRate: sigma, percentages: a, duration: n } = form;

        const result = Math.E**(((sigma / 100) / Math.log(a / 100)) * ((a / 100)**n - 1));

        setValue('result', result.toFixed(3));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateExponentialInterestRate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Відсоткова ставка неперервно зростає по експоненті</h2>

            <span className={styles.textBlock}>
                Початкове значення сили росту становить 5%. Відсоткова 
                ставка неперервно зростає по експоненті, з приростом 10% за 
                рік. Нарощення відбувається впродовж 5 років. Визначити 
                відповідний множник нарощення. 
            </span>

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

export default ExponentialInterestRate;
