import React from 'react'

const Table = ({ product, deleteProduct, reverseId, ascendingOrder, descendingOrder }) => {
    return (

        <table className='product-table'>
            <thead>
                <tr>
                    <th>ID <br />
                        <button onClick={() => reverseId()}>↑↓</button>
                    </th>
                    <th>Title
                        <br />
                        <button onClick={() => ascendingOrder()}>A--Z</button> <button onClick={() => descendingOrder()}>Z--A</button>
                    </th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((ele, index) => {
                        return (
                            <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td><img src={ele.image} alt="" /></td>
                                <td> <button className='delete-btn' onClick={() => deleteProduct(ele.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table