import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { TextInput, FormField, Button } from 'components/common';

import styles from 'components/form-styles.module.scss';

const PeriodInYears = ({ index, control, remove }) => {
    const removePeriod = () => remove(index);

    return (
        <div className={styles.inlineBlock}>
            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.durationInYears`}
                    label='Термін (у роках)'
                    placeholder='Термін (у роках)'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
            <FormField
                    component={TextInput}
                    name={`periods.${index}.margin`}
                    label='Маржа'
                    placeholder='Маржа'
                    type='text'
                    color='gray-light'
                    control={control}
                />
            </div>

            <div className={styles.inlineBtn} style={{ marginTop: '20px' }}>
                <Button
                    label={<FontAwesomeIcon icon={faTrashAlt} />}
                    type='button'
                    color='red'
                    onClick={removePeriod}
                />
            </div>
        </div>
    );
};

export default PeriodInYears;
