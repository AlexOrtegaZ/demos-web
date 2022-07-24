import PropTypes from 'prop-types';

const RepositoryList = ({ listTitle, children }) => {
  return (
    <article className="repository-list">
      <h2 className="repository-list__title">{listTitle}</h2>

      <ul className="repository-list__elements-wrapper">{children}</ul>
    </article>
  );
};

RepositoryList.propTypes = {
  listTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RepositoryList;
