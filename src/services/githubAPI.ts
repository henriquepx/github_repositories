import axios from 'axios';

const fetchRepos = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);

    if (response.status !== 200) {
      throw new Error('Usuário não encontrado.');
    }

    const data = response.data;
    return data;
  }
  
  catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Usuário não encontrado.');
  }
};

export default fetchRepos;