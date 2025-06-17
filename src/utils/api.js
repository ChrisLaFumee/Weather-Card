const baseurl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseurl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };
