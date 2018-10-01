import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { countersActions } from '../features/counters';
 
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

const mapStateToProps = (state: Types.RootState) => ({
  count: state.counters.reduxCounter,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
  onIncrement: countersActions.increment,
}, dispatch);

export const SFCCounterConnectedVerbose =
  connect(mapStateToProps, mapDispatchToProps)(SFCCounter);




