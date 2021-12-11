import axios from "axios";

async function getHalls(url, setState) {
  try {
    const response = axios.get(`${url}/academicinfo/halls`);
    console.log(response.data);
    setState(response.data);
  } catch (err) {
    console.log(err.message);
  }
}

export default getHalls;
