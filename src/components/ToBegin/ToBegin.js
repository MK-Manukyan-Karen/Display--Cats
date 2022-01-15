import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ToBegin.module.css'

const ToBegin = (props) => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/cats" className={style.navLink}>
                ToBegin
            </NavLink>
        </div>
    )
}

export default ToBegin
