import clsx from 'clsx';

import styles from '../common-styles.module.scss';

const TextInput = ({ type, label, placeholder, color, disabled, field }) => (
    <span className={styles.inputControl}>
        <label className={styles.label}>
            <span className={clsx(styles.labelText)}>
                {label}
            </span>
            <input
                type={type}
                placeholder={placeholder}
                className={clsx(styles.textInput, styles[color])}
                disabled={disabled}
                {...field}
            />
        </label>
    </span>
);

export default TextInput;
