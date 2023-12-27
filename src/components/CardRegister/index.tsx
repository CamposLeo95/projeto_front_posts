import { ReactEventHandler, useRef } from "react"

import { instance } from "../../config/axiosConfig"

type CardLoginProps = {
    isRegister: boolean
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardRegister = ({ isRegister, setIsRegister }: CardLoginProps) => {
    const nameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        const name = nameRef.current?.value
        const email = emailRef.current?.value
        const senha = passwordRef.current?.value

        try {
            const response = await instance.post('users', { name, email, senha })

            console.log(response.data)

            setIsRegister(!isRegister)

        } catch (error) {
            alert('Usuario não encontrado!')
            console.log("error ao cadastrar usuario", error)
        }
    }
    return (
        <form className=" w-80 p-8 flex flex-col justify-center items-center gap-2 bg-slate-50">
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-blue-400">Nome</label>
                <input type="text" id="name" ref={nameRef} className="p-3 outline-none rounded-md text-blue-400 border-b-2 border-blue-400" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-blue-400">Email</label>
                <input type="email" id="email" ref={emailRef} className="p-3 outline-none rounded-md text-blue-400 border-b-2 border-blue-400" />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="pass" className="text-blue-400">Senha</label>
                <input type="password" id="pass" ref={passwordRef} className="p-3 outline-none rounded-md text-blue-400 border-b-2 border-blue-400" />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="confirmPass" className="text-blue-400">Confirmar senha</label>
                <input type="password" id="confirmPass" ref={confirmPasswordRef} className="p-3 outline-none rounded-md text-blue-400 border-b-2 border-blue-400" />
            </div>

            {/* Button */}
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-400 w-full  p-4 mt-4 rounded-lg text-slate-100 font-extrabold hover:bg-blue-500 text-sm"
            >Cadastrar</button>

            <p className="text-slate-400">
                Já possui conta?
                <span
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => setIsRegister(!isRegister)}
                > Login!</span>
            </p>
        </form>
    )
}