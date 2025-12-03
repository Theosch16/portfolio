import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import matot_braine from '../assets/images/matot_braine.png';
import apsecurity from '../assets/images/apsecurity.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets réalisés</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://matot-braine.fr/" target="_blank" rel="noreferrer"><img src={matot_braine} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://matot-braine.fr/" target="_blank" rel="noreferrer"><h2>Chargé de contenu et Webmaster</h2></a>
                <p>Pour trois sites de journaux : Les Petites Affiches Matot Braine, le Journal du Palais et la Gazette du Midi.</p>
            </div>
            <div className="project">
                <a href="https://apsecurity.fr/" target="_blank" rel="noreferrer"><img src={apsecurity} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apsecurity.fr/" target="_blank" rel="noreferrer"><h2>Développeur IA</h2></a>
                <p>Développement d'un LLM local dans un contexte de détection de failles de cybersécurité et de rapport automatisé.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;