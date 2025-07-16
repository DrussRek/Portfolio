// Entete de la page

// Image - Titre - Statut - recherche actuel 
//      Phrase d'accroche 

import '../../css/header.css'
import profileImg from './mout.jpeg'

function Header(){
    return (

        <>
            <header className='header'>

                <img src={profileImg} alt="profileImg" className="header-image"></img>
                <div className='header-profile'>
                    <h2 className='header-profile-title'> Recherche de stage </h2> {/** Statut: Recherche d'emploie,stage ... */}
                    <h3> Rémi Capdeville </h3>

                    <p> Phrase d'accroche </p>

                </div>

            </header>
            
        
        </>
    );
}

export default Header