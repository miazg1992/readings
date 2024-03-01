import { AxiosHeaders } from 'axios';
import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  inputComboBoxChange: 'INPUT COMBOBOX CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.inputComboBoxChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return {
        ...action.initialValues,
      };
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: [action.errorValue],
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleComboboxChange = (value) => {
    console.log('useForm cbb');
    dispatch({
      type: actionTypes.inputComboBoxChange,
      field: 'name',
      value: value,
    });
  };

  const handleClearForm = (initialValues) => {
    dispatch({ type: actionTypes.clearValues, initialValues });
    console.log(formValues);
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleComboboxChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
