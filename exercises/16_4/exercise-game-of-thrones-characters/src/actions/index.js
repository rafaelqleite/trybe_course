import charAPI from '../services/charAPI';

const REQUEST_DATA = 'REQUEST_DATA';
const GET_DATA = 'GET_DATA';
const FAILED_REQUEST = 'FAILED_REQUEST';

function requestData() {
  return {
    type: REQUEST_DATA,
  };
}

function getData(info) {
  return {
    type: GET_DATA,
    payload: info,
  };
}

function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
  };
}

export function fetchThrones (texto) {
  return (dispatch) => {
    dispatch(requestData());
    return (charAPI(texto)
      .then(
        (json) => dispatch(getData(json),
        (error) => dispatch(failedRequest(error))
      )));
  };
}