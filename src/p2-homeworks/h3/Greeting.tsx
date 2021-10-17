import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser,
                                                   error,
                                                   totalUsers
                                               }) => {

    const inputClass = error ? s.error : ''

    return (
        <div className={s.someClass}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <div>{error}</div>
            </div>
            <div>
                <button onClick={addUser} disabled={!!error}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
