import '../App.css';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav
      activeKey="#"
    >
      <Nav.Item>
        <Nav.Link href="#">TodoApp</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;