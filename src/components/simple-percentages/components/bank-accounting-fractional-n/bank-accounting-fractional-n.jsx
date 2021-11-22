import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { getDatesDifference } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    credit: 2500,
    startDate: new Date('01/01/2021'),
    endDate: new Date('01/31/2021'),
    d: 20,
    discount: '',
    result: ''
};

const BankAccountingFractionalN = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateSimplePercentages = form => {
        const { credit: S, startDate, endDate, d } = form;

        const t = getDatesDifference(startDate, endDate); // number of days

        const P = S * (1 - t / 360 * d / 100);
        const D = S - P;

        setValue('result', P.toFixed(1));
        setValue('discount', D.toFixed(1));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateSimplePercentages)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Банківський облік (дробове n)</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='credit'
                    label='Вексель'
                    placeholder='Вексель'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineBlock}>
                <div className={styles.inlineElement}>
                    <FormField
                        component={DatePicker}
                        name='startDate'
                        label='Початок'
                        placeholder='Початок'
                        control={control}
                    />
                </div>

                <div className={styles.inlineElement}>
                    <FormField
                        component={DatePicker}
                        name='endDate'
                        label='Кінець'
                        placeholder='Кінець'
                        control={control}
                    />
                </div>
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='d'
                    label='Облікова ставка'
                    placeholder='Облікова ставка'
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
                    name='discount'
                    label='Величина дисконту'
                    placeholder='Величина дисконту'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default BankAccountingFractionalN;
