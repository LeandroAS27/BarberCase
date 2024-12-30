"use client";

//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/firebase';

//react
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

//estilo
import '../../../styles/register.scss';

interface FormData{
    email: string;
    password: string;
}

const Register = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleRegister: SubmitHandler<FormData> = async (data) => {
        const { email, password } = data;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/auth/login");
        } catch (error) {
            setError("Erro ao criar conta. Tente novamente.");
        }
    }

    const handleLoginRedirect = () => {
        router.push("/auth/login");
    }

    return(
        <div className="container-section-register">
            <h1 className="form-title">Register</h1>
            <form onSubmit={handleSubmit(handleRegister)} className="form">
                <div className="flex-column">
                    <label htmlFor="email">Email</label>
                    <div className="inputForm">
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="Digite seu email"
                        {...register("email", {
                            required: "O email é obrigatório.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Insira um email válido.",
                            },
                        })}
                        className="input"
                        />
                    </div>
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>

                <div className="flex-column">
                    <label htmlFor="password">Senha</label>
                    <div className="inputForm">
                        <input 
                        type="password" 
                        id="password"
                        placeholder="Digite sua senha"
                        {...register("password", {
                            required: "A senha é obrigatória.",
                            minLength: {
                                value: 8,
                                message: "A senha deve ter pelo menos 8 caracteres.",
                            },
                        })}
                        className="input"
                        />
                    </div>
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="button-submit">
                    Cadastrar
                </button>

                <p className="p">
                    Já tem uma conta?{' '}
                    <span className="span" onClick={handleLoginRedirect}>
                        Faça o Login
                    </span>
                </p>

            </form>
        </div>
    )
}

export default Register;