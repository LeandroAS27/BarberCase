"use client";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../../config/firebase';

//react
import { useState } from "react"
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import '../../../styles/login.scss';

interface FormData{
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin: SubmitHandler<FormData> = async({email, password}) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (error) {
            setError("Erro ao fazer login. Verifique suas credenciais.");
        }
    }

    const handleRegisterRedirect = () => {
        router.push("/auth/register")
    };

    return(
        <div className="container-section-login">
            <h1 className="form-title">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="form">
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
                        })}
                        className="input"
                        />
                    </div>
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="button-submit">
                    Entrar
                </button>

                <p className="p">
                    Não tem uma conta?{' '}
                    <span className="span" onClick={handleRegisterRedirect}>
                        Registre Agora
                    </span>
                </p>

                <button type="button" className="btn" onClick={handleRegisterRedirect}>
                    Criar conta com outra opção
                </button>

            </form>
        </div>
    )
}

export default Login