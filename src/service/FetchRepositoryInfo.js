export default async function fetchRepositoryInfo(setData, value) {
  const endpoint = `https://api.github.com/repositories/${value}`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  setData(responseJson);
}
