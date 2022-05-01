import { useState, useEffect } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from './RepositoryItem';
interface Repository{
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

  //Parent component
  const [repositories, setRepositories] = useState<Repository[]>([])// use state type Repository[]
  useEffect(() => {
    fetch('https://api.github.com/users/binaryleo/repos')
      .then((response) => response.json()) // When fetch resolves we convert the response to json
      .then((data) => setRepositories(data)) // repository data is set to the state
  }, []) // if the array is empty, the effect will only run once, without parameters, it will run every time the component renders
  console.log(repositories)
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        {repositories.map(repository=>{
          return <RepositoryItem  key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  )
}
