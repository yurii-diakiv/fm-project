import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => (
    <div className={styles.container}>
        <div className={styles.pages}>
            <NavLink to='simple-interest' className={styles.link}>1. Прості відсотки</NavLink>
            <NavLink to='compound-interest' className={styles.link}>2. Складні відсотки</NavLink>
            <NavLink to='interest-rates' className={styles.link}>3. Відсоткові ставки</NavLink>
            <NavLink to='continuous-interest' className={styles.link}>4. Неперервні відсотки</NavLink>
        </div>
    </div>
);

export default Header;
