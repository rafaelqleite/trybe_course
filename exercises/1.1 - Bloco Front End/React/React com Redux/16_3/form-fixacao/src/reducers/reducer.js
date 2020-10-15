const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: 0,
  address: '',
  city: '',
  countryState: '',
  resume: '',
  role: '',
  roleDescription: '',
  submited: false,
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'SUBMITED') {
    action.event.preventDefault();
    return {
      ...state,
      name: state.name,
      email: state.email,
      cpf: state.cpf,
      address: state.address,
      city: state.city,
      countryState: state.countryState,
      resume: state.resume,
      role: state.role,
      roleDescription: state.roleDescription,
      submited: true,
    };

  }

  if (action.type === 'HANDLER') {
    return {
      ...state,
      [action.name] : action.value,
    };
  }
  return state;
}

export default reducer;