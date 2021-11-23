import { useFieldArray } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components/common';

import styles from 'components/form-styles.module.scss';

const Periods = ({ control, name, emptyPeriod, period: Period }) => {
    const { fields, append, remove } = useFieldArray({ control, name });

    return (
        <>
            <div className={styles.inlineBlock}>
                <h2>Періоди</h2>
                <div className={styles.inlineBtn} style={{ marginTop: '2.5px' }}>
                    <Button
                        label={<FontAwesomeIcon icon={faPlus} />}
                        type='button'
                        color='primary'
                        onClick={() => append(emptyPeriod)}
                    />
                </div>
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.inlineBlock}>
                    <Period index={index} />
                    <div className={styles.inlineBtn} style={{ marginTop: '20px' }}>
                        <Button
                            label={<FontAwesomeIcon icon={faTrashAlt} />}
                            type='button'
                            color='red'
                            onClick={index => remove(index)}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Periods;
