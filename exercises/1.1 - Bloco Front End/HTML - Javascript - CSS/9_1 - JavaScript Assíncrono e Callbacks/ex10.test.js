const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
describe('teste se os objetos sao iguais', () => {
  it('teste obj1 com objs2', () => {
    expect(obj1).toStrictEqual(obj2);
  });
  it('teste obj1 com objs3', () => {
    expect(obj1).toStrictEqual(obj3);
  });
  it('teste obj2 com objs3', () => {
    expect(obj2).toStrictEqual(obj3);
  });
});