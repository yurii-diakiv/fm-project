import clsx from 'clsx';

import styles from './styles.module.scss';

const Button = ({ type, label, onClick, color }) => (
    <button
        className={clsx(styles.btn, styles[color])}
        type={type}
        onClick={onClick}
    >
        {label}
    </button>
);

export default Button;
