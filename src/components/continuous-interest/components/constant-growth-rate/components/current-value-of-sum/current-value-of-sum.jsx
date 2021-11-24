import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    debt: 200000,       
    duration: 7,        
    growthRate: 5,    
    result: '',
    resultWithDiscount: ''
};

const CurrentValueOfSum = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateCurrentValueOfSum = form => {
        const { debt: P, duration: n, growthRate: sigma } = form;

        const S = P * Math.E**(-(sigma / 100) * n);

        setValue('result', S.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateCurrentValueOfSum)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Визначити сучасну вартість отриманої за борг суми</h2>

            <span className={styles.textBlock}>
                Боргове зобов’язання на суму 200 000 грн., термін сплати 
                якого настане через 7 років, продано з дисконтом за силою росту 
                5% річних. Визначити сучасну вартість отриманої за борг суми.
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='debt'
                    label='Боргове зобов’язання'
                    placeholder='Боргове зобов’язання'
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
                    label='Сучасна вартість'
                    placeholder='Сучасна вартість'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CurrentValueOfSum;
