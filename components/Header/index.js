import {Nav} from '../Nav/'
import data from '../../data/layout.json'

export const Header = props => (
  <header>
    <h1><img src ={`${process.env.ASSET_PREFIX}/static/logo.svg`} alt="POC Logo" />{data.title}</h1>
    <p>{data.tagline}</p>
    <Nav />
  </header>
);
