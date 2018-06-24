const { is_confirmed, on_confirmed, }                              = require('./order-maybe'),
      { get_order, send_invoice_ticket, create_guests_for_event, } = require('./order');

let id = process.argv[2];

get_order(id)
  .then(is_confirmed)
  .then(on_confirmed(create_guests_for_event))
  .then(on_confirmed(send_invoice_ticket))
  .then(console.log)
;

