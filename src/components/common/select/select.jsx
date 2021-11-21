import ReactSelect from 'react-select';
import clsx from 'clsx';

import styles from '../common-styles.module.scss';

const customStyles = {
    control: (provided) => ({
        ...provided,
        height: 40,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#f2f2f5',
        boxShadow: 'none',
        border: 0,
        fontFamily: 'Inter',
        fontSize: 12,
        borderRadius: 7
    }),
    option: (provided, state) => ({
        ...provided,
        height: 40,
        fontFamily: 'Inter',
        fontSize: 12,
        color: '#424242',
        ...(state.isSelected && { backgroundColor: '#f2f2f5' }),
        "&:hover": {
            backgroundColor: '#f7f7f7'
        }
    })
}

const Select = ({ options, label, defaultValue, onChange, field }) => (
    <span className={styles.inputControl}>
        <label className={styles.label}>
            <span className={clsx(styles.labelText)}>
                {label}
            </span>
            <ReactSelect
                defaultValue={defaultValue}
                options={options}
                styles={customStyles}
                onChange={onChange}
                {...field}
            />
        </label>
    </span>
);

export default Select;
