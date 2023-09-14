import axios from "axios";
import { API_BASE_URL } from "../constants/constants";

export const fetchAllCharacters = async (): Promise<any> => {
	const request = await axios.get(`${API_BASE_URL}/rick-morty-characters`);
	return request.data;
}

export const fetchHumanCharacters = async (): Promise<any> => {
	const request = await axios.get(`${API_BASE_URL}/rick-morty-characters/humans`);
	return request.data;
}
