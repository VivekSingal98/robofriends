import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(<div >
					<App />
				</div> 

			, document.getElementById('root'));
registerServiceWorker();
