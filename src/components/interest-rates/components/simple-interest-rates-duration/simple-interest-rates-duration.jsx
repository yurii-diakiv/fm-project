import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 10000,
    currentLoan: 15000,
    percentageRates: 25,
    duration: ''
};

const SimpleInterstRatesDuration = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { loan, currentLoan, percentageRates } = form;

        const t = ((currentLoan / loan - 1) / (percentageRates / 100)) * 366;

        setValue('duration', t.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Прості відсоткові ставки (невідомий термін)</h2>

            <span className={styles.textBlock}>
                Заборгованість з 10 000 грн. зросла до 15 000 грн. Визначити тривалість позики у днях 
                при нарахуванні 25% простих річних відсотків (рік - високосний).
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='loan'
                    label='Початкова заборгованість'
                    placeholder='Початкова заборгованість'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='currentLoan'
                    label='Теперішня заборгованість'
                    placeholder='Теперішня заборгованість'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='percentageRates'
                    label='Відсоткова ставка'
                    placeholder='Відсоткова ставка'
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
                    name='duration'
                    label='Термін'
                    placeholder='Термін'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default SimpleInterstRatesDuration;
