import React from 'react'
//or house and then inside use house.addres.....
//you can directly write addres country porice to acces them as well
const HouseRow = ({address,country,price}) => {
    return (
            <tr >
                <td>{address}</td>
                <td>{country}</td>
                <td>{price}</td>
            </tr>
    )
}

export default HouseRow