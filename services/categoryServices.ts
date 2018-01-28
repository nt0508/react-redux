import { range} from 'lodash';
const faker = require('faker');

export interface Catelogy {
    id: number;
    name: string;
}

class CatelogyService {
    generate(): Catelogy[]
    {
    //  return range(10).map((): Catelogy => ({
    //     id: faker.random.number(),
    //     name: faker.commerce.product()
    //  }));
        return [
            {
                id: 1,
                name: "Foods"
            },
            {
                id: 2,
                name: "Sport"
            },
            {
                id: 3,
                name: "Car"
            },
            {
                id: 4,
                name: "Motor"
            },
            {
                id: 5,
                name: "Technology"
            },
            {
                id: 6,
                name: "Music"
            },
            {
                id: 7,
                name: "Life"
            },
            {
                id: 8,
                name: "Love"
            },
            {
                id: 9,
                name: "Cartoon"
            },
            {
                id: 10,
                name: "Games"
            }
        ]
    }
}

const catelogyService = new CatelogyService()
export default catelogyService;