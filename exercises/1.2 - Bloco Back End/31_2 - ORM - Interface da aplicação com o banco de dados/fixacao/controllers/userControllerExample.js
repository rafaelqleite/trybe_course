const express = require('express');
const { User } = require('../models');
const router = express.Router();

/_ Busca um usuário _/
router.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });

});

/_ Cria um novo usuário _/
router.post('/', (req, res) => {
  const { fullname, email } = req.body;

  User.create({ fullname, email }).then((user) => res.status(200).json(user))
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

/_ Atualiza um usuário _/
router.put('/:id', (req, res) => {
  const { fullname, email } = req.body;

  User.update(
    { fullname, email },
    {
      where: { id: req.params.id },
    }
  ).then((result) => {
    res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

/_ Remove um usuário _/
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).send({ message: `Usuário excluído com sucesso.` });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;
