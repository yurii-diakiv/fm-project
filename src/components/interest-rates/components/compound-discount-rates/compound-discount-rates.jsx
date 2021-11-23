import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    percentages: 75,
    duration: 3,
    compoundDiscountRates: ''
};

const CompoundDiscountRates = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { percentages, duration } = form;

        const d = (1 - (percentages / 100) ** (1 / duration)) * 100;

        setValue('compoundDiscountRates', d.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Складні облікові ставкии</h2>

            <span className={styles.textBlock}>
                Нехай вексель виписують на 3 роки. При його обліку власник бажає отримати 75% вартості векселя. 
                Визначити розмір складної облікової ставки для забезпечення таких умов контракту.
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='percentages'
                    label='Бажаний відсоток'
                    placeholder='Бажаний відсоток'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='duration'
                    label='Термін'
                    placeholder='Термін'
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
                    name='compoundDiscountRates'
                    label='Складна облікова ставка'
                    placeholder='Складна облікова ставка'
                    disabled
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default CompoundDiscountRates;
