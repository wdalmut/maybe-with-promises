# Use maybes with promises

In order to improve readability an example of data maybe with promises

```
get_order(1)
  .then(is_confirmed)
  .then(on_confirmed(create_guests_for_event))
  .then(on_confirmed(send_invoice_ticket))
;
```

If the order from `get_order` is not confirmed `confirmed = false` nothing is
executed.

## Usage

### Install dependencies

```sh
npm install
```

### Run it

Execute the data pipeline

```sh
$ node index.js 1
Guests created! { id: '1', confirmed: true, price: 89.9 }
Invoice sent! Promise { { id: '1', confirmed: true, price: 89.9 } }
Maybe {
  value: Promise { { id: '1', confirmed: true, price: 89.9 } } }
```

_nothing to do_

```sh
node index.js
Maybe {}
```

