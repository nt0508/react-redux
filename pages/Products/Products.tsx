import Link from 'next/link'
import * as React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../store/reducer'
import styled from 'styled-components'
import productService from '../../services/productServices'
import Content from './Content/index'
import SideBar from './Sidebar/index'

const Background = styled.section`
    background: red;
    width:100%;

`
const store = createStore(reducer);

const products = productService.generate()


class Products extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <SideBar />
                    <Content />
                </div>
           </Provider>
        )
    }
}
export default Products
