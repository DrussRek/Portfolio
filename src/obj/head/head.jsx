// Entete de la page

// Image - Titre - Statut - recherche actuel 
//      Phrase d'accroche 

import '../../css/header.css'
import profileImg from '../../assets/mout.jpg'


import React from 'react';

// Informations de l'utilisateur
const user = {
    name: "Rémi Capdeville",
    status: "Recherche de stage",
    title: "Développement logiciel, Cybersécurité",
    catchPhrase: "Phrase d'accroche lorum ipsu dolonzbvieavbiebvcuabubcuiarbib"
}



function Header(){
    return (

        <>
            <header className='header'>
                {/* Google Font arrow link  */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_forward" />
                {/** Logo - Image de profil */}
                <div className="header-image">
                    <img src={profileImg} alt="profileImg" className='header-profile-image' ></img>
                    <h3 className='header-image-name'> {user.name} </h3>
                </div>
     

                <div className='header-profile'>
                    <h2 className='header-profile-status'> {user.status} </h2> 
                    
                    <p className='header-profile-catch-sentence'> {user.catchPhrase} </p>

                    <nav className='header-profile-nav'>

                        <ul className='header-profile-nav'>
                            <li className='header-profile-nav-item'> <a href="#about">A propos</a> </li>
                            <li className='header-profile-nav-item'> <a href="#skills">Compétences</a> </li>
                            <li className='header-profile-nav-item'> <a href="#education">Formation</a> </li>
                            <li className='header-profile-nav-item'> <a href="#projects">Projets</a> </li>
                            
                            <li className='header-profile-nav-item'> <a href="#experience">Expérience</a> </li>
                            <li className='header-profile-nav-item'> <a href="#contact">Contact</a> </li>
                        </ul>

                    </nav>
                    

                </div>

            </header>
            
        
        </>
    );
}

export default Header