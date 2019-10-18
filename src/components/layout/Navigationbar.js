import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { SearchAPI } from '../../actions/search';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import favicon from '../../img/favicon.png';


const Navigationbar = ({ SearchAPI }) => {
  const [searchData, setSearchData] = useState(
    {
      search: '',
      filter: 'movie'
    }
  );
  const { search, filter } = searchData;

  const onChange = e => setSearchData({ ...searchData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    SearchAPI({
      search,
      filter
    })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={favicon}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Movie Film Icon"
        /> {'Movie Finder'} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form inline onSubmit={e => onSubmit(e)}>
          <Form.Control type="text" placeholder="Search" name="search" value={search} onChange={e => onChange(e)} className="mr-sm-2" required />
          <Form.Control as="select" name="filter" value={filter} onChange={e => onChange(e)} className="mr-sm-2">
            <option value="movie"> Movies </option>
            <option value="series"> Series </option>
            <option value="episodes"> Episodes </option>
          </Form.Control>
          <Button variant="outline-success" type="submit" >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

Navigationbar.propTypes = {
  SearchAPI: PropTypes.func.isRequired
}

export default connect(null, { SearchAPI })(Navigationbar);
