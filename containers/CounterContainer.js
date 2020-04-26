import CounterComponent from '../components/CounterComponent';
import { connect } from 'react-redux';

//Actions
import { increaseAction, decreaseAction } from '../store/actions';

const mapStateToProps = (state) => {
    // alert(`state after changed : ${JSON.stringify(state.counterReducers)}`);
    return {
        times: state.counterReducers ? state.counterReducers : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step) => {
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) => {
            dispatch(increaseAction(step));
        }
    };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
