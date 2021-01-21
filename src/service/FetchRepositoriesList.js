export default async function fetchRepositoriesList(setData, value) {
  const endpoint = `https://api.github.com/users/${value}/repos`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  setData(responseJson);
}
