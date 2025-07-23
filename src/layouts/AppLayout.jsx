import React, { useState } from 'react'

// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Router
import { Outlet, Link, useNavigate } from 'react-router-dom'

// AppLayout
const AppLayout = () => {
  const [ keyword, setKeyword ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() !== '') {
      navigate(`/movies?keyword=${keyword}`);
      setKeyword('')
    }
  }

  return (
    <div>
      <main>
          <Navbar expand="lg" variant='dark'>
            <Container>
              <Navbar.Brand href="/">MVDB</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  navbarScroll
                >
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/movie'>Movies</Nav.Link>
                  <Nav.Link as={Link} to='/mypage'>MyPage</Nav.Link>
                  <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                </Nav>
                <Form className="d-flex" onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <Button type='submit'>Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        <Outlet></Outlet>
      </main>
      <footer className='footer'>
        <p>© 2025 MVDB.</p>
      </footer>
    </div>
  )
}

export default AppLayout