import { useFieldArray } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components/common';
import { PeriodInYears } from './components';

import styles from 'components/form-styles.module.scss';

const PeriodsInYears = ({ control, name }) => {
    const { fields, append, remove } = useFieldArray({ control, name });

    const emptyPeriodInYears = {};

    const addPeriod = () => append(emptyPeriodInYears);

    return (
        <>
            <div className={styles.inlineBlock}>
                <h2>Періоди</h2>
                <div className={styles.inlineBtn} style={{ marginTop: '2.5px' }}>
                    <Button
                        label={<FontAwesomeIcon icon={faPlus} />}
                        type='button'
                        color='primary'
                        onClick={addPeriod}
                    />
                </div>
            </div>
            {fields.map((field, index) => (<PeriodInYears key={field.id} index={index} control={control} remove={remove} />))}
        </>
    );
};

export default PeriodsInYears;
