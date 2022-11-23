import React from 'react';
import './Home.css'

let nome = 'Sérgio'

function Home() {
    return (
        <div>
            <div>
                <h1 className='title'>Pagina Inicial</h1>
                <h1 className='title2'>menu</h1>
            </div>
            <div>
                <h2 className='font'>Olá, meu nome é {nome} e esse site é apenas um exemplo.</h2>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis porro alias dolor facilis debitis reiciendis, est aliquam ea
                 quisquam quo numquam ipsum, incidunt consequuntur, iste nostrum exercitationem praesentium esse. Lorem, ipsum dolor sit amet consectetur a
                 dipisicing elit. Maxime quisquam repudiandae soluta odit, eos maiores adipisci odio repellendus officia placeat nam, rem qui cupiditate 
                 obcaecati ab mollitia labore neque vitae!</p>
                 <img className='img' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="pinguim" />
                 <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis porro alias dolor facilis debitis reiciendis, est aliquam ea
                 quisquam quo numquam ipsum, incidunt consequuntur, iste nostrum exercitationem praesentium esse. Lorem, ipsum dolor sit amet consectetur a
                 dipisicing elit. Maxime quisquam repudiandae soluta odit, eos maiores adipisci odio repellendus officia placeat nam, rem qui cupiditate 
                 obcaecati ab mollitia labore neque vitae!</p>
            </div>
           
            
            <p className='footpage' >Turma 02</p>
        </div>
    );
}

export default Home;