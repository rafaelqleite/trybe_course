let stateList = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];

let pegaPosDropDown = document.getElementById('estado');
for (let i = 0; i < stateList.length; i += 1) {
  let criaOption = document.createElement('option');
  criaOption.innerHTML = stateList[i][0] + ' - ' + stateList[i][1];
  criaOption.value = stateList[i][1];
  pegaPosDropDown.append(criaOption);
}


document.getElementById('data-inicio').DatePickerX.init();

new window.JustValidate('.js-form-2', {
  rules: {
    email: {
      required: true,
      email: true,
      remote: {
        url: 'https://just-validate-api.herokuapp.com/check-correct',
        sendParam: 'email',
        successAnswer: 'OK',
        method: 'GET'
      }
    },
  },
  messages: {
    email: {
      remote: 'Email já existe',
      email: 'Email inválido!'
    }
  },
}
);