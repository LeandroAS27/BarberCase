"use client"

import '../../styles/units.scss';
import '../../styles/main.scss';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkedAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

interface ImageItem {
    src: string;
    alt: string;
    link: string;
    title: string;
    address: string;
    telephone: string;
    openingHours: string;
}

const images: ImageItem[] = [
    { src: "/barbearia1.jpg", 
        alt: "Imagem 1", 
        link: "/barbearia1" , 
        title: "BarbeariaCase1", 
        address: "R. Lorem ipsum, 123", 
        telephone: "(11) 91234-5687", 
        openingHours: "Terça a sexta das 10h00 às 21h00 Sábado das 9h00 às 19h00" },
    { src: "/barbearia2.jpg", 
        alt: "Imagem 1", 
        link: "/barbearia2", 
        title: "BarbeariaCase2", 
        address: "R. Lorem industry, 312", 
        telephone: "(11) 94125-5439", 
        openingHours: "Segunda a sexta das 10h00 às 19h00 Sábado das 10h00 às 17h00" },
    { src: "/barbearia3.jpg", 
        alt: "Imagem 1", 
        link: "/barbearia3", 
        title: "BarbeariaCase3",
        address: "R. Sao Francisco, 442",
        telephone: "(11) 93452-1325",
        openingHours: "Terça a sexta das 10h00 às 21h00 Sábado das 9h00 às 19h00"},
    { src: "/barbearia4.jpg", 
        alt: "Imagem 1", 
        link: "/barbearia4", 
        title: "BarbeariaCase4", 
        address: "R. Castro Alves, 329", 
        telephone: "(11) 94356-3298", 
        openingHours: "Segunda a sexta das 10h00 às 19h00 Sábado das 10h00 às 17h00" },
    { src: "/barbearia5.jpg", 
        alt: "Imagem 1", 
        link: "/barbearia5", 
        title: "BarberiaCase5", 
        address: "R. Santos Dumont, 306", 
        telephone: "(14) 94783-1082", 
        openingHours: "Segunda a sexta das 10h00 às 19h00 Sábado das 10h00 às 17h00", },
    { src: "/barbearia6.jpg", 
        alt: "Imagem 1", 
        link: "/barbearia6", 
        title: "BarbeariaCase6", 
        address: "R. Minas Gerais, 318", 
        telephone: "(34) 92368-4380", 
        openingHours: "Segunda a sexta das 10h00 às 21h00 Sábado das 9h00 às 19h00" },
];

const carouselVariants = {
    hidden: { opacity: 0, x: -50},
    visible: { opacity: 1, x: 0},
}

const Units: React.FC = () => {
    return(
        <>
            <section id="unidades" className="container-section-units">
                <div className='units-text'>
                    <h1>Nossas Unidades</h1>
                </div>

                <div className='units-carousel'>
                    {images.map((image, index) => (
                        <motion.div 
                        key={index} 
                        className='carousel-item'
                        initial="hidden"
                        animate="visible"
                        variants={carouselVariants}
                        transition={{duration: 0.8, delay: index * 0.2}}
                        >
                            <Link href={image.link} key={index}>
                            <Image 
                                src={image.src}
                                alt={image.alt}
                                width={300}
                                height={200}
                                className='units-image'
                            />
                            </Link>
                            <h1 className='unit-description'>{image.title}</h1>
                            <h2 className='unit-address'>
                                <FaMapMarkedAlt className='icon'/> {image.address}
                            </h2>
                            <p className='unit-telephone'>
                               <FaPhoneAlt className='icon' /> {image.telephone}
                            </p>
                            <p className='unit-openingHours'>
                               <FaClock className='icon' /> {image.openingHours}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Units;