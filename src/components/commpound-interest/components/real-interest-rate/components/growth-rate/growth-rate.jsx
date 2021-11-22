import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, DatePicker } from 'components/common';
import { getDatesDifferenceInYears } from 'helpers';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    nominalInterestRate: 15,
    startDate: new Date('11/25/2018'),
    endDate: new Date('11/25/2021'),
    numberOfCompounding: 4, // кількість нарахувань у році
    result: ''
};

const GrowthRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateGrowthRate = form => {
        const { nominalInterestRate: j, numberOfCompounding: m, startDate, endDate  } = form;

        const n = getDatesDifferenceInYears(startDate, endDate);
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
