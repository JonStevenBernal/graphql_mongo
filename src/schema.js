export default `
    type Car {
        _id: String!,
        name: String!,
        modelo: String!,
        anio: Int,
        marca: String!
    }

    type Query {
        allCars: [Car!]!
    }

    type Mutation {
        createCar(
            name: String!,
            modelo: String!,
            anio: Int!,
            marca: String!): Car!,
        updateCarYear(_id: String!, anio: Int!): Car!
    }
`;
