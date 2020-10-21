export const Nav = props => (
  <nav>
    <ul>
      <li><a href={`${process.env.ASSET_PREFIX}/`}>Home</a></li>
      <li><a href={`${process.env.ASSET_PREFIX}/projects`}>Projects</a></li>
    </ul>
  </nav>
);
