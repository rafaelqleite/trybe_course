import React from 'react';
import { connect } from 'react-redux';

class Consolidado extends React.Component {
  render() {
    const { name, email, cpf, address, city, countryState, resume, role, roleDescription, submited } = this.props;
      if (submited) {
        return (
          <div>
            Consolidado:<br />
            Nome: { name }.<br />
            Email: { email } .<br />
            CPF: { cpf }.<br />
            Endereço: { address }.<br />
            Cidade: { city }.<br />
            Estado: { countryState }.<br />
            Resumo: { resume }.<br />
            Cargo: { role }.<br />
            Descrição do cargo: { roleDescription }.<br />
          </div>
        );
      }
    return null;
  }
}

const mapStateToProps = (state) => ({
  name: state.reducer.name,
  email: state.reducer.email,
  cpf: state.reducer.cpf,
  address: state.reducer.address,
  city: state.reducer.city,
  countryState: state.reducer.countryState,
  resume: state.reducer.resume,
  role: state.reducer.role,
  roleDescription: state.reducer.roleDescription,
  submited: state.reducer.submited,
});

export default connect(mapStateToProps)(Consolidado);