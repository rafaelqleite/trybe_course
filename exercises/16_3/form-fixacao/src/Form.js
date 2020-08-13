import React from 'react';
import { connect } from 'react-redux';
import { submit, handler } from './actions/index';

class Form extends React.Component {

  render() {
    const states = ['', 'Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    const { name, email, cpf, address, city, countryState, resume, role, roleDescription, handler, submit } = this.props;
    return (
      <form onSubmit={submit}>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                value={name}
                onChange={handler}
               />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={email}
                onChange={handler}
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                value={cpf}
                onChange={handler}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={address}
                onChange={handler}
             />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={city}
                onChange={handler}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                value={countryState} onChange={handler}
              >
                  {states.map((value, key) =>
                    <option key={key}>{value}</option>
                    )
                  }
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
              <div className="container">
                Resumo do currículo:
                <textarea
                  name="resume"
                  maxLength="1000"
                  required
                  value={resume}
                  onChange={handler}
                />
              </div>
              <div className="container">
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={role}
                  onChange={handler}
                   />
              </div>
              <div className="container">
                Descrição do cargo:
                <textarea
                  name="roleDescription"
                  maxLength="500"
                  value={roleDescription}
                  onChange={handler}
                />
              </div>
            </fieldset>
            <button type="submit">Enviar</button>
          </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.reducer.name,
    email: state.reducer.email,
    cpf: state.reducer.cpf,
    address: state.reducer.address,
    city: state.reducer.city,
    countryState: state.reducer.countryState,
    resume: state.reducer.resume,
    role: state.reducer.role,
    roleDescription: state.reducer.roleDescription,
  };
};

export default connect(mapStateToProps, {handler, submit})(Form);
