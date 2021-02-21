import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Hello, i'am Justine, a 33 years old web developper. <br/>I found an internship in wich i will have to developp a website with gatsby.<br/>That's why i'am following this gatsby bootcamp tutorial that lasts more than 4 hours ! </p>
            <p>You wan't to contact me ? <Link to="/contact">It's over there !</Link></p>
        </Layout>
    )
}

export default AboutPage