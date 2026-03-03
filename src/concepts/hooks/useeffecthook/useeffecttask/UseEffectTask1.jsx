import React, { useEffect, useState } from 'react'
import Table from './Table'
import "./table.css"

const UseEffectTask1 = () => {
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)

    const fdata = async () => {
        try {
            const productData = await fetch("https://fakestoreapi.com/products")
            const data = await productData.json()
            setproduct(data)
        } catch (error) {
            toast.error(" Failed to load the data please  try again later...!")
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fdata()
    }, [])

    const reverseId = () => {
    setproduct([...product].reverse());
  };

  const ascendingOrder = () => {
    setproduct([...product].sort((a, b) =>
      a.title.localeCompare(b.title)
    ));
  };

  const descendingOrder = () => {
    setproduct([...product].sort((a, b) =>
      b.title.localeCompare(a.title)
    ));
  };

 
     const deleteProduct = (id) => {
        const filteredProduct = product.filter((item) => item.id !== id)
        setproduct(filteredProduct)
    }

   

    return (

        <div>

            {
                loading ? "Loading..." : <Table product={product} deleteProduct={deleteProduct}  reverseId={reverseId} ascendingOrder={ascendingOrder} descendingOrder={descendingOrder}/>
            }

        </div>
    )
}

export default UseEffectTask1