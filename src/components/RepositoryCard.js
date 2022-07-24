import { useMemo } from 'react';
import PropTypes from 'prop-types';

import useFetch from 'hooks/useFetch';
import cleanupRepositoryData from 'utils/cleanupRepositoryData';
import githubMark from 'assets/GitHub-Mark-32px.png';

const RepositoryCard = ({ repositoryName }) => {
  const repositoryURL = `https://api.github.com/repos/AlexOrtegaZ/${repositoryName}`;
  const { data = {}, loading, error } = useFetch(repositoryURL);

  const cleanedRepositoryData = useMemo(
    () => cleanupRepositoryData(data),
    [data]
  );

  const { ownerAvatar, ownerUser, lastUpdate, htmlURL, message } =
    cleanedRepositoryData;

  /* Temporal */
  if (loading) {
    return <span>Cargando repositorio...</span>;
  }

  /* Temporal */
  if (error || message) {
    return <span>Ocurrió un error al obtener el repositorio</span>;
  }

  return (
    <a
      href={htmlURL}
      rel="noreferrer"
      target="_blank"
      className="repository-card"
    >
      <article className="repository-card__wrapper">
        <div className="repository-card__owner-avatar-wrapper">
          <div className="repository-card__owner-avatar-img-wrapper">
            <img
              src={ownerAvatar}
              alt="Owner"
              className="repository-card__owner-avatar"
            />
          </div>

          <div className="repository-card__github-mark-img-wrapper">
            <img
              src={githubMark}
              alt="Github"
              className="repository-card__github-mark"
            />
          </div>
        </div>

        <div className="repository-card__repository-info">
          <span className="repository-card__repository-name">
            {repositoryName}
          </span>
          <div className="repository-card__repository-info-wrapper">
            <span className="repository-card__owner-user">{ownerUser}</span>
            <span className="repository-card__bullet">•</span>
            <span className="repository-card__last-update">
              {`Updated at ${lastUpdate} ${
                lastUpdate === 1 ? 'month' : 'months'
              } ago`}
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

RepositoryCard.propTypes = {
  repositoryName: PropTypes.string.isRequired,
};

export default RepositoryCard;
