import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import productService from '../../../services/productServices'
import Navigation from './navigation'
import ProductWide from './productmaster/productwide'
import ProductList from './productmaster/productlist'
import Search from './Search'
import Product from '../../../services/productServices'
import {filter, includes} from 'lodash'
import { VIEW_TYPE } from '../../../store/constants/ActionTypes'

const product = Product.generate();

class Content extends React.Component {
    state = {
            viewType: false,
            strSearch: '',
    }

    handleSearch = (value: any) => {
        this.setState({
            strSearch: value,
        })
    }

    render () { 
        
        let itemsOrigin = product;
        let items = []
        const search = this.state.strSearch;

        items = filter (itemsOrigin, (item) => {
            return includes (item.name, search)
        });

        const { viewType } = this.state;  
        return (
            <div>
                <Search onClickGo={this.handleSearch}/>
                <button onClick={this.props.onView} >Change Type</button>
               { this.props.myView === true ? <ProductWide products={items}/> : <ProductList products={items}/>}
            </div>
        );
    }
}

const mapStateToProps ( state ) => {
    return {
        myView : state.viewType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onView: () => dispatch({type: VIEW_TYPE}),      
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Content)
