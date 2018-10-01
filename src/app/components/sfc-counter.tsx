import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';


import { StateType } from 'typesafe-actions';
// import { RouterAction, LocationChangeAction } from 'react-router-redux';
// type ReactRouterAction = RouterAction | LocationChangeAction;
import { CountersAction } from '../redux/reducer';
import rootReducer from '../redux/store/root-reducer';
 
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = CountersAction;
 



import { connect } from 'react-redux';


import * as countersActions from '../redux/actions';
 
export interface SFCCounterProps {
  label: string;
  count: number;
  onIncrement: () => any;
}

export const SFCCounter: React.SFC<SFCCounterProps> = (props) => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => { onIncrement(); };

  return (
    <div>
      <span>{label}: {count} </span>
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

export const SFCCounterConnectedVerbose =
  connect(mapStateToProps, mapDispatchToProps)(SFCCounter);




