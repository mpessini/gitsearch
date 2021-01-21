export default async function fetchUserInfo(setData, value) {
  const endpoint = `https://api.github.com/users/${value}`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  setData(responseJson);
}
