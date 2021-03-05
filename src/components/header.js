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
                    <Nav.Link href="#home" className="font-weight-bold">Start-up</Nav.Link>
                    <Nav.Link href="#link" className="font-weight-bold">Expertises</Nav.Link>
                    <Nav.Link href="#link" className="font-weight-bold">L'équipe</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button className="rounded-pill" variant="danger">Contactez-nous</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


            <h1>
                <Link to='/' className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link to='/' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
                    <li><Link to='/about' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
                    <li><Link to='/blog' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
                    <li><Link to='/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header