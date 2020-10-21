import {Nav} from '../Nav/'
import data from '../../data/data.json'

export const Header = props => (
  <header>
    <h1><img src ={`${process.env.ASSET_PREFIX}/static/logo.svg`} alt="POC Logo" />{data[0].title}</h1>
    <p>{data[0].description}</p>
    <Nav />
  </header>
);
