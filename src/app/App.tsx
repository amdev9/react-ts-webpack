import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SFCCounterConnectedVerbose } from './components/sfc-counter';

declare let module: any
const list: string[] = ["ipfs", "storage"];

ReactDOM.render(
    <Provider store={store}>
      <SFCCounterConnectedVerbose label={'SFCCounterConnectedVerbose'} permissions={list}/>
    </Provider>,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}