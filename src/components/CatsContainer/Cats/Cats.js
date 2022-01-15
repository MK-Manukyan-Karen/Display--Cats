import React from 'react'
import style from './Cats.module.css'

const Cats = (props) => {

    return (
        <div className={style.catsWrapper}>
            <div className={style.photoWrapper}>
                <img src={props.cat.url}
                    className={style.photo}
                    alt='photoCat'
                // style={{
                //     height: props.cat.height,
                //     width: props.cat.width
                // }}
                />
            </div>

        </div>
    )
}

export default Cats
