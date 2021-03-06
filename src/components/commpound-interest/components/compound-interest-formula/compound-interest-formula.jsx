import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    loan: 100000,       //P
    duration: 3,        //n
    percentages: 20,    //i
    result: '',
    percentagesValue: ''
};

const CompoundInterestFormula = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateCompoundInterest = form => {
        const { loan: P, duration: n, percentages: i } = form;

        const S = P * (1 + (i / 100))**n;
        const I = S - P;

        // Alternative formula
        // const I = P * ((1 + (i / 100))**n - 1);

        setValue('result', S.toFixed(2));
        setValue('percentagesValue', I.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateCompoundInterest)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Формула складних відсотків</h2>

            <span className={styles.textBlock}>
                Визначити розмір заборгованості за позикою у 100 000 грн. за три роки, якщо нарощення відбувалося за
                складною відсотковою ставкою 20% річних. Яку величину з цієї суми становлять проценти?
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='loan'
                    label='Позика'
                    placeholder='Позика'
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
                    name='percentagesValue'
                    label='Величина процентів'
                    placeholder='Величина процентів'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CompoundInterestFormula;
