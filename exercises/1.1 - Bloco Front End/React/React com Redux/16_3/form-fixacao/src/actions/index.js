
export const submit = (event) => ({
  type: 'SUBMITED',
  event,
});

export const handler = (event) => ({
  type: 'HANDLER',
  name: event.target.name,
  value: event.target.value,
});