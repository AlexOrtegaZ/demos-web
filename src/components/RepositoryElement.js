import PropTypes from 'prop-types';

const RepositoryElement = ({ elementTitle, children }) => {
  return (
    <li className="repository-element">
      <h3 className="repository-element__title">{elementTitle}</h3>

      {children}
    </li>
  );
};

RepositoryElement.propTypes = {
  elementTitle: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default RepositoryElement;