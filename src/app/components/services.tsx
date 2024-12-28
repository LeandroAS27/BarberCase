
//sass
import '../../styles/services.scss';

//images
import Image from 'next/image';
import scissors from '../../../public/icons8-tesoura-de-barbeiro-96.png';
import beard from '../../../public/icons8-barba-curta-96.png';
import hairHighlights from '../../../public/icons8-coloração-de-cabelo-96.png';
import cut from '../../../public/icons8-barbershop-96.png';
import razor from '../../../public/icons8-navalha-96.png';
import soap from '../../../public/icons8-sabonete-96.png';
import sealing from '../../../public/icons8-homem-penteando-cabelo-96.png';
import beardCut from '../../../public/icons8-barba-longa-96 (1).png';
import hydratation from '../../../public/icons8-barber-96.png';

const Services = () => {
    return(
        <>  
            <section id='servicos' className="container-section-services">
                <div className='services-title'>
                    <h1>Serviços</h1>
                </div>

                <div className='services-grid'>
                    <div className='services-item'>
                        <Image src={scissors} alt='icone de tesoura'/>
                        <h1>Sobrancelha</h1>
                        <p>R$ 50</p>
                    </div>

                    <div className='services-item'>
                        <Image src={beard} alt='icone de barba'/>
                        <h1>Camuflagem de Barba</h1>
                        <p>R$ 120</p>
                    </div>

                    <div className='services-item'>
                        <Image src={hairHighlights} alt='icone de pintura no cabelo'/>
                        <h1>Luzes</h1>
                        <p>R$ 85</p>
                    </div>

                    <div className='services-item'>
                        <Image src={cut} alt='icone de tesoura e escova' />
                        <h1>Corte</h1>
                        <p>R$ 80</p>
                    </div>

                    <div className='services-item'>
                        <Image src={razor} alt='icone de navalha' />
                        <h1>Barboterapia</h1>
                        <p>R$ 85</p>
                    </div>

                    <div className='services-item'>
                        <Image src={soap} alt='icone de sabonete' />
                        <h1>Limpeza de pele</h1>
                        <p>R$ 80</p>
                    </div>

                    <div className='services-item'>
                        <Image src={sealing} alt='icone de homem penteando o cabelo' />
                        <h1>Selagem</h1>
                        <p>R$ 90</p>
                    </div>

                    <div className='services-item'>
                        <Image src={beardCut} alt='icone de sabonete' />
                        <h1>Barba</h1>
                        <p>R$ 60</p>
                    </div>

                    <div className='services-item'>
                        <Image src={hydratation} alt='icone de creme para hidratacao' />
                        <h1>Hidratação</h1>
                        <p>R$ 50</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;