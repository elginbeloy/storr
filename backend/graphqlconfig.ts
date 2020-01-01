import {gql} from 'apollo-server-express';
import {Product} from './models';

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    imageURL: String
    category: String
    price: String
    discountPrice: String
    description: String
    defaultColor: String
    colorsAvailable: String
    brand: String!
    brandUrl: String!
    comment: [String]
    currentRating: Int
  }

  input ProductInput {
    name: String!
    imageURL: String
    category: String
    price: String
    discountPrice: String
    description: String
    defaultColor: String
    colorsAvailable: String
    brand: String!
    brandUrl: String!
    comment: [String]
    currentRating: Int
  }

  type Query {
    getProduct(id: String!): Product
    listProducts: [Product]
  }

  type Mutation {
    addProduct(product: ProductInput): Product
    editProduct(id: ID!): Product
    deleteProduct(id: ID!): Product
  }
`;

interface ProductInput {
  name: string;
  imageURL: string;
  category: string;
  price: number;
  discountPrice: number;
  description: string;
  defaultColor: string;
  colorsAvailable: string;
  brand: string;
  brandUrl: string;
  comment: [string];
  currentRating: number;
}

export const resolvers = {
  Query: {
    getProduct: async (root: string, args: {id: string}) =>
      Product.findById(args.id).exec(),
    listProducts: async (root: string) => Product.find({}).exec(),
  },
  Mutation: {
    addProduct: async (root: string, args: {audioByte: ProductInput}) => {
      try {
        const response = await Product.create(args.audioByte);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};
