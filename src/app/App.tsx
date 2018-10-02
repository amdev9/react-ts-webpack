import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PermissionLayoutConnected } from './components/PermissionLayout';

declare let module: any
const list: string[] = ["ipfs", "storage"];

ReactDOM.render(
    <Provider store={store}>
      <PermissionLayoutConnected label={'PermissionLayoutConnected'} permissions={list}/>
    </Provider>,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}