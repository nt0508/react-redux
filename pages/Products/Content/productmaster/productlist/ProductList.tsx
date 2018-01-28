import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import productService ,{Product} from '../../../../../services/productServices'

interface Props {
    products: Product[]
}

export class ProductList extends React.Component<Props> {

    public render() {
        return (
                <table>
                    <thead>
                        <tr>    
                            <th>Product ID</th>
                            <th>Decription</th>
                            <th>Type</th>
                            <th>Default Unit of Measure</th>
                            <th>Unit Cost(USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>Inventory</td>
                            <td>PCS</td>
                            <td>{product.unitcost}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        )
    }
}

export default ProductList
