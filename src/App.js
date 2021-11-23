import { Route, Routes } from 'react-router-dom';
import { SimpleInterest, Header, InterestRates, CompoundInterest } from './components';

import styles from './index.module.scss';

const App = () => (
	<>
		<Header />
		<div className={styles.main}>
			<Routes>
				<Route path='/' element={<SimpleInterest />} />
				<Route path='/simple-interest' element={<SimpleInterest />} />
				<Route path='/interest-rates' element={<InterestRates />} />
				<Route path='/compound-interest' element={<CompoundInterest />} />
				<Route path='*' exact element={<SimpleInterest />} />
			</Routes>
		</div>
	</>
);

export default App;
