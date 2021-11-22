import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => (
    <div className={styles.container}>
        <div className={styles.pages}>
            <NavLink to='simple-percentages' className={styles.link}>Прості відсотки</NavLink>
            <NavLink to='another-paragraph' className={styles.link}>Another Paragraph</NavLink>
            <NavLink to='compound-interest' className={styles.link}>Складні відсотки</NavLink>
        </div>
    </div>
);

export default Header;
