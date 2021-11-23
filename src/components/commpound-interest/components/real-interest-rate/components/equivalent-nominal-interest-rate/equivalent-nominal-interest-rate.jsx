import { useForm } from 'react-hook-form';
import { Button, TextInput, FormField } from 'components/common';

import styles from 'components/form-styles.module.scss';

const DEFAULT_VALUES = {
    initialNominalInterestRate: 25,
    initialNumberOfCompounding: 12, // кількість нарахувань у році
    equivalentNumberOfCompounding: 4,
    result: ''
};

const EquivalentNominalInterestRate = () => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const calculateEquivalentNominalInterestRate = form => {
        const { initialNominalInterestRate: j_1, initialNumberOfCompounding: m_1, equivalentNumberOfCompounding: m_2  } = form;

        const j_2 = m_2 * ((1 + (j_1 / 100) / m_1)**(m_1 / m_2) - 1) * 100;

        setValue('result', j_2.toFixed(1));
    };

    return (
        <form
            onSubmit={handleSubmit(calculateEquivalentNominalInterestRate)}
            className={styles.formulaForm}
        >
            <h2 className={styles.title}>Еквівалентна номінальна відсоткова ставка</h2>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='initialNominalInterestRate'
                    label='Початкова номінальна ставка відсотка'
                    placeholder='Початкова номінальна ставка відсотка'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='initialNumberOfCompounding'
                    label='Кількість нарахувань у році (початкова ставка)'
                    placeholder='Кількість нарахувань у році (початкова ставка)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inputBlock}>
                <FormField
                    component={TextInput}
                    name='equivalentNumberOfCompounding'
                    label='Кількість нарахувань у році (шукана ставка)'
                    placeholder='Кількість нарахувань у році (еквівалентна ставка)'
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
                    label='Еквівалентна номінальна ставка відсотка'
                    placeholder='Еквівалентна номінальна ставка відсотка'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>
        </form>
    );
};

export default EquivalentNominalInterestRate;
