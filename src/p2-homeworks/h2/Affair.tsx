import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    id: number
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }

    return (
        <div className={s.affair}>
            <span>
                {props.affair.name} {`>>>`}
            </span>
            <span>
                priority - {props.affair.priority}
            </span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
