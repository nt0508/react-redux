import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import categoryService from '../../../../services/categoryServices'
import { slice } from 'lodash';

interface Prop {
    title: string
    data: any
}

interface State {
    numOfItem: number
    isExpanded: boolean
}

const categories = categoryService.generate()

class Categories extends React.Component< Prop, State > {
    
    state = {
        numOfItem: 3,
        isExpanded: false,

    }

    catToggle = () => {
        this.setState({isExpanded: !this.state.isExpanded}) 
    }  
    public render() {
        const { isExpanded, numOfItem } = this.state;
        const renderedCats = isExpanded ? this.props.data : this.props.data.slice(0, numOfItem)
        return (
            <div>
                <p>{this.props.title}</p>
                <ul>
                    {renderedCats.map((cat: any) => <li key={cat.name}>{cat.name}</li>)}
                </ul>
                <button onClick={this.catToggle}>{isExpanded ? 'See Less' : 'See More'}</button>
            </div>
        )
    }
}
export default Categories
