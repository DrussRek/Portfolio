// Entete de la page

// Image - Titre - Statut - recherche actuel 
//      Phrase d'accroche 

import '../../css/header.css'
import profileImg from '../../assets/mout.jpg'


import React from 'react';

// Composant Header
// Affiche l'entête de la page avec le logo, le titre, le statut et la phrase d'accroche
// Utilisé dans le fichier App.jsx

header.displayName = 'Header';


function Header(){
    return (

        <>
            <header className='header'>
                {/** Logo - Image de profil */}
                <div className="header-image">
                    <img src={profileImg} alt="profileImg" className='header-profile-image' ></img>
                    <h3 className='header-image-name'> Rémi Capdeville </h3>
                </div>
     

                <div className='header-profile'>
                    <h2 className='header-profile-status'> Recherche de stage </h2> {/** Statut: Recherche d'emploie,stage ... */}
                    
                    <p className='header-profile-title'> Développement logiciel, Cybersécurité </p> {/** Titre: Développeur Web, DevOps ... */}
                    <p className='header-profile-catch-sentence'> Phrase d'accroche lorum ipsu dolonzbvieavbiebvcuabubcuiarbib </p>

                    <nav className='header-profile-nav'>
                        <ul className='header-profile-nav'>
                            <li className='header-profile-nav-item'> <a href="#about">A propos</a> </li>
                            <li className='header-profile-nav-item'> <a href="#skills">Compétences</a> </li>
                            <li className='header-profile-nav-item'> <a href="#projects">Projets</a> </li>
                            <li className='header-profile-nav-item'> <a href="#contact">Contact</a> </li>
                        </ul>
                    </nav>



                </div>

            </header>
            
        
        </>
    );
}

export default Header