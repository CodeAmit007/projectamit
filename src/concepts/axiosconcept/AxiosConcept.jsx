import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosConcept = () => {

    const [product, setProduct] = useState([])

    //! axios is a library. it is used to handle thr api/http request in frontend

    const fdata = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/products")
        setProduct(data)
    }

    useEffect(() => {
        fdata()
    }, [])

    return (
        <div>
            <h1>AxiosConcept</h1>
            {
                product.length === 0 ? <h1>Loading....</h1> : product.map((ele,index)=>{
                    return (
                        <h2 key={index}>{ele.title}</h2>
                    )
                })
            }
        </div>
    )
}

export default AxiosConcept