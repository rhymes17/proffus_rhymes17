import React from 'react'

const Category = ({ imgURL, name }) => {
  return (
    <section>
        <div className='category'>
            <img src={imgURL} alt="category image" />
            <h4 className='category__name'>{name}</h4>
        </div>
    </section>
  )
}

export default Category