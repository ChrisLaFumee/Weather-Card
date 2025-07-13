import { checkResponse } from "./weatherApi";

const baseurl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseurl}/items`).then(checkResponse);
}

function addItem(item) {
  return fetch(`${baseurl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

function removeItem(id) {
  return fetch(`${baseurl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItem, removeItem };
