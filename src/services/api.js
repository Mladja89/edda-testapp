import axios from "axios";
import { config } from "../../config";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${config.API_URL}/users`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
