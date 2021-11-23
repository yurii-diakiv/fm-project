import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField, Select } from 'components/common';

import styles from 'components/form-styles.module.scss';

const options = [
    { value: 1, label: 'Щорічно' },
    { value: 1 / 4, label: 'Щоквартально' },
];

const DEFAULT_VALUES = {
    initialAmount: 10000,
    finalAmount: 30000,
    percentageRates: 15,
    capitalization: options[0],
    duration: ''
};

const CompoundInterestRates = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculate = form => {
        const { finalAmount, initialAmount, percentageRates, capitalization } = form;

        const n = Math.log(finalAmount / initialAmount) /
            ((1 / capitalization.value) * Math.log(1 + (percentageRates / 100) * capitalization.value));

        setValue('duration', n.toFixed(2));
    };

    return (
        <form
            onSubmit={handleSubmit(calculate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Складні відсоткові ставки</h2>

            <span className={styles.textBlock}>
                За який час сума на депозиті зросте з 10 000 грн до 30 000 грн. за умови, що на 
                вкладені кошти нараховуються відсотки за ставкою 15% складних річних, а капіталізація 
                відбувається раз на рік? Щоквартально?
            </span>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='initialAmount'
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
                    name='finalAmount'
                    label='Кінцева сума'
                    placeholder='Кінцева сума'
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

            <div className={styles.inputBlock}>
                <FormField
                    component={Select}
                    name='capitalization'
                    label='Капіталізація'
                    placeholder='Капіталізація'
                    options={options}
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

export default CompoundInterestRates;
