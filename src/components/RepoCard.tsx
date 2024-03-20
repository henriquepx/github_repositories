import './_repoCard.scss';
import { FaGithub } from 'react-icons/fa';

interface Repo {
    name: string;
    description: string;
    language: string;
    html_url: string;
  }
  
  const RepoCard = ({ repo }: { repo: Repo }) => {
    return (
      <div className='CardContainer'>
        <div>
          <div className='logoname'>
            <FaGithub size={20} color='#fff'/>
            <h3 className='reponame'>{repo.name}</h3>
          </div>
          <p className='repodescription'>{repo.description}</p>
          <p className='repolanguage'>{repo.language}</p>
        </div>
        <a className='linkrepositorio' href={repo.html_url} target='_blank' rel='noreferrer'>Link pro repositório</a>
      </div>
    );
  };

export default RepoCard