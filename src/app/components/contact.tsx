"use client"

import '../../styles/contact.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

//images
import Image from 'next/image';
import Logo from '../../../public/icons8-barba-longa-96.png';

interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
}


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<ContactFormInputs>();

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        try {
            await addDoc(collection(db, "contacts"), data);
            alert("Mensagem Enviada com sucesso!");
            reset();
        } catch (error) {
            console.error("Erro ao enviar a mensagem: ", error)
        }
    };

    return(
        <>
            <section id="contato" className="container-section-contact">
                <h1>Contato</h1>
                <div className='contact-grid'>
                    <div className='contact-form'>
                        <h2>Entre em Contato</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Insira aqui seu nome:</label>
                            <input 
                            id='name'
                            type="text" 
                            placeholder='Insira seu nome...'
                            {...register("name", { required: "O nome é obrigatório" })}
                            />
                            {errors.name && <p className='error'>{errors.name.message}</p>}

                            <label htmlFor="email">Digite aqui o seu e-mail:</label>
                            <input 
                            id='email'
                            placeholder='Insira seu email...'
                            type="email" 
                            {...register("email", 
                                { required: "O email é obrigatório", 
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "E-mail inválido"
                                    } 
                                })}
                            />
                            {errors.email && <p className='error'>{errors.email.message}</p>}

                            <label htmlFor="message">Como podemos te ajudar?</label>
                            <textarea 
                            id="message"
                            placeholder='Digite sua mensagem...'
                            {...register("message", { required: "A mensagem é obrigatória" })}
                            />
                            {errors.message && <p className='error'>{errors.message.message}</p>}
                            
                            <button type='submit'>Enviar Mensagem</button>
                        </form>
                    </div>
                    
                    <div className='contact-logo'>
                        <Image src={Logo} alt='Logo de uma barba'/>
                    </div>


                    <div className='contact-info'>
                        <p>
                            Segunda à Sexta : 9H ÀS 20H | Sábado: 9H às 19H | Domingo: 10H às 14H
                        </p>

                        <p>
                            Email: loremIpsum@lorem.com
                        </p>

                        <p>
                            Endereço:  R. Sao Francisco, 442
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;