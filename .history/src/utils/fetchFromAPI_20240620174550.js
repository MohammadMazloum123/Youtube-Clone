import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	hostname: 'youtube-v31.p.rapidapi.com',
	port: null,
	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
	headers: {
		'x-rapidapi-key': '68760b5014msh8db35ec815e2c4ap160925jsn4905c70c9f1d',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};