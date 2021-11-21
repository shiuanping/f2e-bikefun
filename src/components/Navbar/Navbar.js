import logo from '../../assets/img/LOGO.svg';
import { Header, LOGO, Menu, Button } from './style';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Header>
      <LOGO>
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </LOGO>
      <Menu>
        {/* <li>
          <Link to="/SearchBike">
            <Button>尋找單車</Button>
          </Link>
        </li>
        <li>
          <Link to="/SearchLane">
            <Button>尋找車道</Button>
          </Link>
        </li> */}
      </Menu>
    </Header>
  );
}

export default Navbar;
