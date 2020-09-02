import { uuidv4 } from "./utils"

export function getInitialCurrencies() {
  return {
    eur: 1.12,
    usd: 1.33,
    rup: 97.45,
    aus: 1.75,
    can: 1.75
  }
}

export function getInitialOrders() {
  return [
    {
      id: uuidv4(),
      title: "The LEGO Movie 2: The Second Part",
      price: 8,
      currency: "usd"
    },
    {
      id: uuidv4(),
      title: "Kangaroo, 2yo 🦘",
      price: 750,
      currency: "aus"
    },
    {
      id: uuidv4(),
      title: "Old Amsterdam 🧀",
      price: 12.99,
      currency: "eur"
    },
    {
      id: uuidv4(),
      title: "Old Football boots Virgil van Dijk",
      price: 1200,
      currency: "eur"
    }
  ]
}

export function getOrderPrice(order, currencies) {
  return order.price * (1 / currencies[order.currency])
}

export function setOrderPrice(orders, orderId, price) {
  return orders.map((order) =>
    order.id === orderId
      ? {
          ...order,
          price
        }
      : order
  )
}

export function setOrderCurrency(orders, orderId, currency) {
  return orders.map((order) =>
    order.id === orderId
      ? {
          ...order,
          currency
        }
      : order
  )
}

export function getOrderTotal(orders, currencies) {
  return orders.reduce(
    (acc, order) => acc + getOrderPrice(order, currencies),
    0
  )
}

export function addOrder(orders) {
  return [
    ...orders,
    {
      id: uuidv4(),
      title: "Item " + Math.round(Math.random() * 1000),
      price: Math.round(Math.random() * 1000),
      currency: "usd"
    }
  ]
}

export function setCurrencyRate(currencies, currency, price) {
  return { ...currencies, [currency]: price }
}
