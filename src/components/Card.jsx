import React from 'react'

export default function Card({item: {image, name, category, price}}) {
  return (
    <div>
        <div>
            <div>
                <img src={image.mobile} alt={name} />
            </div>
            <button>Add Item</button>
        </div>
        <div>
            <p>{category}</p>
            <h3>{name}</h3>
            <h4>${price.toFixed(2)}</h4>
        </div>
    </div>
  )
}
