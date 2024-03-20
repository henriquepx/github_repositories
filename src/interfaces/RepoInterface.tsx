import './_reposInterface.scss';
import GithubIcon from '../assets/githubflying.png';
import GithubIcon2 from '../assets/githubicon.png';
import { useState, useRef } from 'react';
import RepoCard from '../components/RepoCard';
import fetchRepos from '../services/githubAPI';

interface Repo {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const RepoInterface = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string>('');

  const ProfileGithubName = useRef<HTMLInputElement | null>(null);

  const handleSearch = async () => {
    if (ProfileGithubName.current && ProfileGithubName.current.value) {
      try {
        const fetchedRepos = await fetchRepos(ProfileGithubName.current.value);
        setRepos(fetchedRepos);
        setError('');
      } catch (error) {
        setError('Usuário não encontrado.');
      }
    } else {
      setError('Please enter a valid username');
    }
  };

  return (
    <div className="RepoContainer">
      <div className='GithubIntro'>
        <img src={GithubIcon} alt="Github ícon" />
        <div className='IntroText'>
          <h1 className='titleContainer'>Github</h1>
          <h2 className='subtitleContainer'>Repositórios</h2>
        </div>
        <img src={GithubIcon2} alt="Github Icon 2" />
      </div>
        
      <div className='Inputs'>
        <label htmlFor="InputSearch">Digite seu nome de usuário no Github:</label>
        <input
          className='inputSearch'
          id='InputSearch'
          type="text"
          ref={ProfileGithubName}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      
      <div className='ReposGithub'>
        {error ? (
            <p className='error'>{error}</p>
        ) : (
          <ul>
            {repos.map(repo => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RepoInterface;
