import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

export function myOrders(orders) {
  return orders.filter((o) => o.city === "Giza" && o.status === "paid");
}

export function summarize(orders) {
  return orders.reduce((total, o) => total + o.price * o.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(orders.map((o) => ({ item: o.item, quantity: o.quantity })));
}