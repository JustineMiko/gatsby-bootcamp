import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h1>Notre équipe</h1>
            <p>Des experts qui vous accompagnent dans votre voyage digital.</p>
            <h2>L'ESPRIT LA PILULE ROUGE</h2>
            <p>
                Beaucoup d’amour, beaucoup d’humour, beaucoup de travail.
                <br/>C’est notre credo chez La Pilule Rouge.
                <br/>GET THINGS DONE, AND HAVE FUN !
            </p>
            <p>Vous voulez nous contacter ? <Link to="/contact">C'est par ici !</Link></p>
        </Layout>
    )
}

export default AboutPage