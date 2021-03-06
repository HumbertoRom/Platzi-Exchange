const url = "https://api.coincap.io/v2/assets?limit=20";

function getAssets() {
  return fetch(`${url}`, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
};
