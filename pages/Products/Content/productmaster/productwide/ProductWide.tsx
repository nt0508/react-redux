import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import productService, {Product} from '../../../../../services/productServices'

const Content = styled.div`
    border: solid;
    margin: 2em 0 2em 2em;
    width: 30%;
    height:150px;
    float:left;
    display:flex;
`
const ImgContent = styled.div`
    margin-top:5%;
    height:80%;
    width:45%;
    background: red;
`
const ProductContent = styled.div`
    width:50%;
`
const ProductContent__p = styled.p`
    margin-left:2em;
`

interface Props {
    products: Product[]
}

class ProductWide extends React.Component<Props> {

    render() {
        return (
            <div>
                { this.props.products.map(product => (
                    <div key={product.id} > 
                        <p>{product.name}</p>
                        <p>{product.id}</p>
                        <p>{product.unitcost}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ProductWide
