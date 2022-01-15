import React from 'react'
import style from './Select.Category.module.css'

const SelectCategory = ({ categories, getCatsData, setCategoryId }) => {


    const sendCategoryId = (categoryId) => {
        getCatsData(categoryId)
    }

    return (
        <div className={style.buttonWrapper}>

            {categories.map((category => {
                return <button className={style.category} onClick={() => sendCategoryId(category.id)} key={category.id}>
                    {category.name.toUpperCase()}
                </button>
            }))
            }

        </div>
    )
}

export default SelectCategory
