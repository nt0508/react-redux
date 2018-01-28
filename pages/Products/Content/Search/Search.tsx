import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

interface Props{
    onClickGo: any
}

class Search extends React.Component<Props> {

    state = {
        strSearch : ''
    } 

    handleSearch = () => {
        this.props.onClickGo(this.state.strSearch)
    }

    handleClear = () => {
        this.setState({strSearch: ''});
        this.props.onClickGo('')
    }

    handleChange = (event: any) => {
        this.setState({strSearch: event.target.value});
    }

    render() {
        return (
            <div>
                <input value={this.state.strSearch} onChange={this.handleChange} type="text" placeholder="What are you looking for..."/>
                <button onClick={this.handleSearch}>Search</button>
                <button onClick={this.handleClear}>Clear</button>
            </div>
        )
    }
}
export default Search 