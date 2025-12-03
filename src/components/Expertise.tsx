import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Django",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "Github",
    "Gitlab",
    "Docker",
    "Linux",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "Scikit-learn",
    "Pandas",
    "PowerBI",
    "Qdrant",
    "Hugging Face",
    "Matplotlib",
    "Seaborn",
    "Gradio",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développeur web full stack</h3>
                    <p>J’ai développé un large éventail d’applications web en utilisant des technologies modernes telles que React, Flask et Django. Je possède une solide maîtrise du développement frontend et backend.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack technique:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps et automatisation</h3>
                    <p>Une fois l’application développée, j’accompagne les clients dans la mise en place des tests DevOps, des pipelines CI/CD et de l’automatisation du déploiement afin de garantir un lancement en production réussi.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack technique:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Data Science</h3>
                    <p>Restez compétitif sur le marché en intégrant des solutions de Data Science dans vos projets. J’ai une expérience professionnelle dans la création de solutions d’entreprise intégrant le Machine Learning afin de renforcer la prise de décision.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;