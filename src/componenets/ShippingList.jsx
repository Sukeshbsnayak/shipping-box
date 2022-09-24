import React from 'react'
import { useState } from 'react'
import ShippingForm from './ShippingForm';
function ShippingList() {
    const [items, setItems] = useState([]);//items is the array which stored in form of array,//form is child and list is parent
    const addToList = (item) => {
        console.log(item);
        const itemsCopy = [...items];//add element to array by copy of it
        itemsCopy.push(item)
        setItems(itemsCopy);

    };

    return (
        <div>
            <ShippingForm addToListCallback=
                {(value) => addToList(value)} />
            <table>
                <thead>
                    <th>Title</th>
                    <th>Weight</th>
                    <th>color</th>
                    <th>add</th>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <tr key={item.title}>
                                <td>{item.title}</td>
                                <td>{item.weight}</td>
                                <td>
                                    <div style={{
                                       backgroundColor:
                                       item.colour,
                                       width:"60px",
                                       height:"30px"}}></div>
                                </td>
                                <td>{item.add}</td>

                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShippingList