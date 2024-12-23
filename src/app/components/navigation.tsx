"use client";

//images
import '../../styles/navigation.scss';
import '../../styles/main.scss';


//animation
import { Link } from 'react-scroll';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24}
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 }}
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const typingEffect = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.1,
            },
        },
    };
    
    const letterAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const text = "Cabelo. Barba. Bigode";

    return(
        <>
            <header className="container-header">
                <h1>BarberCase</h1>
                <motion.nav 
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className={`container-nav ${isOpen ? "open" : ""}`}
                >
                    <motion.button 
                        aria-label="Toggle navigation" 
                        aria-expanded="false"
                        className='menu-toggle' 
                        whileTap={{scale: 0.97}}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </motion.button>
                    <motion.ul
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05,
                                },
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3,
                                },
                            },
                        }}
                        style={{pointerEvents: isOpen ? "auto" : "none"}}
                    >
                        <motion.li variants={itemVariants}>
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </motion.li>
                        <motion.li 
                        variants={itemVariants}
                        >
                            <Link to="servicos" smooth={true} duration={500}>
                                Unidades
                            </Link>
                        </motion.li>
                        <motion.li 
                        variants={itemVariants}
                        >
                            <Link to="servicos" smooth={true} duration={500}>
                                Serviços
                            </Link>
                        </motion.li>
                        <motion.li 
                        variants={itemVariants}
                        >
                            <Link to="servicos" smooth={true} duration={500}>
                                Sobre
                            </Link>
                        </motion.li>
                        <motion.li 
                        variants={itemVariants}
                        >
                            <Link to="servicos" smooth={true} duration={500}>
                                Contato
                            </Link>
                        </motion.li>
                    </motion.ul>
                </motion.nav>

                <button className="button-cta">Agendar</button>
            </header>

            <main>
                <section id='home' className="container-section">
                    <div className="container-overlay">
                        <h1>Seu estilo, nossa arte!</h1>
                        <motion.h2
                            variants={typingEffect}
                            initial="hidden"
                            animate="visible"
                        >
                            {text.split("").map((char, index) => (
                                <motion.span key={index} variants={letterAnimation}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h2>

                        <motion.a 
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.3}}
                            whileTap={{scale: 0.8}}
                            href="https://wa.me/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Acessar o Whatsapp"
                            className="button-cta"
                        >
                            Agende um Horário
                        </motion.a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Navigation;