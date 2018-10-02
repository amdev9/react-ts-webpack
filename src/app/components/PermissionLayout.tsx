import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { StateType } from 'typesafe-actions';
 
import { CountersAction } from '../redux/reducer';
import rootReducer from '../redux/store/root-reducer';
 
export type RootState = StateType<typeof rootReducer>;
export type RootAction = CountersAction;
 
import { connect } from 'react-redux';

import * as countersActions from '../redux/actions';
 
import { PermissionBox } from './PermissionBox';

export interface SFCCounterProps {
  permissions: string[];
  label: string;
  count: number;
  onIncrement: () => any;
}

export const SFCCounter: React.SFC<SFCCounterProps> = (props) => {
  const { label, count, onIncrement, permissions } = props;

  const permissionItems: JSX.Element[] = permissions.map(
    (value: string): JSX.Element => (
      <PermissionBox 
        key={`${value}`} 
        item={value} 
        onTogglePerm={onIncrement}
      />
    )      
  );


  const handleIncrement = () => { onIncrement(); };

  return (
    <div>
      <span>{permissionItems} == {label}: {count} </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.counters.reduxCounter,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onIncrement: countersActions.increment,
}, dispatch);

export const PermissionLayoutConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCCounter);




