const Maybe = require('data.maybe')

module.exports = {
  is_confirmed: (order) => order && order.confirmed ? Maybe.Just(order) : Maybe.Nothing(order),
  on_confirmed: (fn) => (order) => order.map(fn),
};
