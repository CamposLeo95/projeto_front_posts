
import { ContainerCenter } from "../layouts/ContainerCenter"

import welcomeImage from '../assets/welcome.jpg'

import { CardLogin } from "../components/CardLogin"
import { CardRegister } from "../components/CardRegister"
import { useState } from "react"

export const Login = () => {

    const [isRegister, setIsRegister] = useState(true)

    return (
        <ContainerCenter>
            <div className="w-4/5 flex justify-center">
                <div className="flex justify-center w-1/2">
                    <img className="" src={welcomeImage} alt="welcome" />
                </div>
                {isRegister
                    ? <CardLogin isRegister={isRegister} setIsRegister={setIsRegister} />
                    : <CardRegister isRegister={isRegister} setIsRegister={setIsRegister} />}
            </div>
        </ContainerCenter>
    )
}