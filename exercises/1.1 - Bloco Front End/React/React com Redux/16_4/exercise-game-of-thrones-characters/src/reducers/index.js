const REQUEST_DATA = 'REQUEST_DATA';
const GET_DATA = 'GET_DATA';
const FAILED_REQUEST = 'FAILED_REQUEST';

const INITIAL_STATE = {
  isFetching: false,
  conteudoJson: '',
  error: false,
};


export default function reducer (state = INITIAL_STATE, action ) {
  switch(action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case GET_DATA:
      return {
        ...state,
        isFetching: false,
        conteudoJson: action.payload,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}