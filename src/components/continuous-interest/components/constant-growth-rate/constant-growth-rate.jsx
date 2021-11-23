import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    sum: 1000000,       
    duration: 5,        
    growthRate: 10,    
    result: '',
    resultWithDiscount: ''
};

const ConstantGrowthRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateConstantGrowthRate = form => {
        const { sum: P, duration: n, growthRate: sigma } = form;

        const S = P * Math.E**((sigma / 100) * n);

        const S_discount = P * Math.E**(-(sigma / 100) * n);

        setValue('result', S.toFixed(2));
        setValue('resultWithDiscount', S_discount.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateConstantGrowthRate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Постійна сила росту</h2>

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
                    label="Результат (якщо боргове зобов'язання було продано без дизконту)"
                    placeholder="Результат (якщо боргове зобов'язання було продано без дизконту)"
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name="resultWithDiscount"
                    label="Результат (якщо боргове зобов'язання було продано із дизконтом)"
                    placeholder="Результат (якщо боргове зобов'язання було продано із дизконтом)"
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default ConstantGrowthRate;
