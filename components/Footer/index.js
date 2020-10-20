import data from '../../data/data.json'

const Footer = props => (
  <footer>
    <h2>{data[0].footer}</h2>
    <p>&copy;2020</p>
  </footer>
);

export default Footer;
