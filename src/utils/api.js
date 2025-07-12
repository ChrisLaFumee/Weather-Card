const baseurl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseurl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function addItem(item) {
  return fetch(`${baseurl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function removeItem(id) {
  return fetch(`${baseurl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems, addItem, removeItem };
