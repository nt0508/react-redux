import { range} from 'lodash';
const faker = require('faker');
import categoryService from './categoryServices'
import vendorService from './vendorServices'

export interface Product {
    id: string,
    name: string,
    unitcost: number,
    // category: string,
    // vendor: string,
}
const categories = categoryService.generate()
const vendors = vendorService.generate()
class ProductService {
    generate(): Product[] {
    //  return range(1).map((): Product => ({
    //     // id: faker.random.number(),
    //     // name: faker.company.companyName(),
    //     // unitcost: faker.commerce.price(),
    //     id: '1',
    //     name: 'Nguyen',
    //     unitcost: 20,
    //     // category: categories[0].name,
    //     // vendor: vendors[0].name,
    //  }))
        return [
            {
                id: '1',
                name: 'Adidas NMD R1',
                unitcost: 300
            },
            {
                id: '2',
                name: 'Adidas Ultraboost',
                unitcost: 200
            },
            {
                id: '3',
                name: 'String',
                unitcost: 10
            },
            {
                id: '4',
                name: 'Coca Cola',
                unitcost: 10
            },
            {
                id: '5',
                name: 'Pepsi',
                unitcost: 10
            },
            {
                id: '6',
                name: 'Iphone X',
                unitcost: 150
            },
            {
                id: '7',
                name: 'Iphone 7 Plus',
                unitcost: 100
            },
            {
                id: '8',
                name: 'Nike 90',
                unitcost: 50
            },
            {
                id: '9',
                name: 'Vans Old School',
                unitcost: 50
            },
            {
                id: '10',
                name: 'Bánh Khọt',
                unitcost: 20
            },
        ]
    }
}

const productService = new ProductService()
export default productService
