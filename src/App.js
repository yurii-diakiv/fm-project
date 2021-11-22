import { Route, Routes } from 'react-router-dom';
import { SimplePercentages, Header, AnotherParagraph, CompoundInterest } from './components';

import styles from './index.module.scss';

const App = () => (
	<>
		<Header />
		<div className={styles.main}>
			<Routes>
				<Route path='/' element={<SimplePercentages />} />
				<Route path='/simple-percentages' element={<SimplePercentages />} />
				<Route path='/another-paragraph' element={<AnotherParagraph />} />
				<Route path='/compound-interest' element={<CompoundInterest />} />
				<Route path="*" exact element={<SimplePercentages />} />
			</Routes>
		</div>
	</>
);

export default App;
