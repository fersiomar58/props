import React from 'react'

export const Cards = ({data}) => {
  return (
    <div>
    <tr>
        <td>{data.name}</td>
        <td><img src={data.imgSrc} alt="product pic" /></td>
        <td>{data.price}</td>
    </tr>
    </div>
  )
}
