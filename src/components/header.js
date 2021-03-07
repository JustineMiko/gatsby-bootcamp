import React from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from './pilulerouge.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    
    `)

    return (
        <header className={headerStyles.header}>

            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="300"
                    height="80"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="./" className="font-weight-bold">Accueil</Nav.Link>
                    <Nav.Link href="./blog" className="font-weight-bold">Blog</Nav.Link>
                    <Nav.Link href="./about" className="font-weight-bold">L'équipe</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button className="rounded-pill" variant="danger" href="./contact">Contactez-nous</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


            <h1>
                <Link to='/' className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>

        </header>
    )
}

export default Header