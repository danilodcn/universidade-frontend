import GetFromAPI from "../getFromAPI";

export default async function NamesFromAPI() {
  const url = "http://localhost:5000/api/allNames";
  return await GetFromAPI(url)
}
