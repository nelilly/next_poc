import data from '../../data/layout.json'

export const Footer = props => (
  <footer>
    <h2>{data.footer}</h2>
    <p>&copy;{data.copyright}</p>
  </footer>
);
