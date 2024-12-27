"use client"
import dynamic from 'next/dynamic';
import '../../styles/about.scss'
 
const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
    ssr:false,
})

const About = () => {
    return(
        <>
            <section id="sobre" className="container-section-about">
                <div className="about-title">
                    <h1>Sobre</h1>
                </div>

                <div className='about-grid'>
                    <div className='about-description'>
                        <h1>BarberCase1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis sunt nihil non consequatur assumenda accusantium repellat aut accusamus est cum culpa, excepturi, blanditiis modi voluptate sed quos reprehenderit. Sed?</p>
                    </div>

                    <div>
                        <div className='about-video'>
                            <VideoPlayer/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;