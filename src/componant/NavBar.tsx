import React,{useState} from 'react';
import {Row ,Button, Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap'

function NavBar({llsearch}:any) {
  const [searchya, setsearchya] = useState()
  const onSearch = (e:any) =>{
    e.
    llsearch(searchya);
    // setsearchya();
  }

  return (
    <Row>
    <Navbar bg="dark" expand="lg" variant='dark' >
      <Container >
        <Navbar.Brand href="#">
            <div className='x' >
              خميسة 
            </div>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="بحث"
              className="me-2"
              onChange={(e:any) => setsearchya(e.target.value)}
              value={searchya}
            />
            <button onClick={ onSearch} className='btn'>ابحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}
export default NavBar;