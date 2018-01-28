import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Vendors, {Vendor}  from '../../../services/vendorServices'
import Categories, {Catelogy} from '../../../services/categoryServices'

const Section = styled.div`

    width:20%;
    float:left;

`
const categories = Categories.generate();
const vendors = Vendors.generate();

interface State {
    categories: Catelogy[]
    vendors: Vendor[]
}

class Sidebar extends React.Component< {}, State > {
    state = {
        categories: categories,
        vendors: vendors
    }
    render() {
        const {categories, vendors} = this.state
        return (
                <Section>
                    <Panel title='Category' data={this.state.categories}></Panel>
                    <Panel title='Vendor' data={this.state.vendors}></Panel>
                </Section>
        )
    }
}

export default Sidebar
