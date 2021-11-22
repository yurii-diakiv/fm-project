import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { TextInput, DatePicker, FormField, Button } from 'components/common';

import styles from 'components/form-styles.module.scss';

const Period = ({ index, control, remove }) => {
    const removePeriod = () => remove(index);

    return (
        <div className={styles.inlineBlock}>
            <div className={styles.inlineElement}>
                <FormField
                    component={DatePicker}
                    name={`periods.${index}.startDate`}
                    label='Початок'
                    placeholder='Початок'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={DatePicker}
                    name={`periods.${index}.endDate`}
                    label='Кінець'
                    placeholder='Кінець'
                    control={control}
                />
            </div>

            <div className={styles.inlineElement}>
                <FormField
                    component={TextInput}
                    name={`periods.${index}.percentages`}
                    label='Відсотки'
                    placeholder='Відсотки'
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

export default Period;
