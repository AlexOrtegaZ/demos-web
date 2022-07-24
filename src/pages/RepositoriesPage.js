import RepositoryList from 'components/RepositoryList';
import RepositoryElement from 'components/RepositoryElement';
import RepositoryCard from 'components/RepositoryCard';
import repositories from 'utils/repositories';

const RepositoriesPage = () => {
  const lists = Object.keys(repositories).map(lista => (  
    <RepositoryList key={lista} listTitle={lista}>

      {repositories[lista].map(({ name, repositoryName }) => (
        <RepositoryElement key={name} elementTitle={name}>
          <RepositoryCard 
            repositoryName={repositoryName}
          />
        </RepositoryElement>
      ))}

    </RepositoryList>
  ));

  return (
    <section className="repositories-page">
      <h1 className="repositories-page__title">Repositorios</h1>

      {lists} 
    </section>
  );
};

export default RepositoriesPage;