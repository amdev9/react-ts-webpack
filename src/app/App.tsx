import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { SFCCounterConnectedVerbose } from './components/sfc-counter';

declare let module: any

ReactDOM.render(
    <Provider store={store}>
      <SFCCounterConnectedVerbose label={'SFCCounterConnectedVerbose'} />
    </Provider>,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}