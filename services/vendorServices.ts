import { range} from 'lodash';
const faker = require('faker');

export interface Vendor {
    id: number;
    name: string;
}

class VendorService {
    generate(): Vendor[]{
    //  return range(10).map((): Vendor => ({
    //     id: faker.random.number(),
    //     name: faker.company.companyName(),
    //  }));
        return [
            {
                id:1,
                name: "Name Company 1"
            },
            {
                id:2,
                name: "Name Company 2"
            },
            {
                id:3,
                name: "Name Company 3"
            },
            {
                id:4,
                name: "Name Company 4"
            },
            {
                id:5,
                name: "Name Company 5"
            },
            {
                id:6,
                name: "Name Company 6"
            },
            {
                id:7,
                name: "Name Company 7"
            },
            {
                id:8,
                name: "Name Company 8"
            },
            {
                id:9,
                name: "Name Company 9"
            },
            {
                id:10,
                name: "Name Company 10"
            },
        ]
    }
}

const vendorService = new VendorService()
export default vendorService;