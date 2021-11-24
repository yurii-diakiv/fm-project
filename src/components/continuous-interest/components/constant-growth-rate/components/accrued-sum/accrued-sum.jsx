import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    sum: 1000000,       
    duration: 5,        
    growthRate: 10,    
    result: ''
};

const AccuredSum = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateAccuredSum = form => {
        const { sum: P, duration: n, growthRate: sigma } = form;

        const S = P * Math.E**((sigma / 100) * n);

        setValue('result', S.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateAccuredSum)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Визначити нарощену суму</h2>

            <span className={styles.textBlock}>
                Визначити нарощену за п’ять років суму, якщо сила росту 
                становитиме 10%, а початкова сума – 1 000 000 грн.
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='sum'
                    label='Початкова сума'
                    placeholder='Початкова сума'
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

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='growthRate'
                    label='Сила росту'
                    placeholder='Сила росту'
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
                    label='Нарощена сума'
                    placeholder='Нарощена сума'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default AccuredSum;
