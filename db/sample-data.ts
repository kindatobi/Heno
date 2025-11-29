import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "ADMIN",
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "USER",
    },
  ],
  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Classic Polo style with modern comfort",
      detail:
        "Made from premium stretch cotton blend for maximum comfort and flexibility. Features moisture-wicking technology and a tailored fit that moves with you throughout the day.",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
      ],
      price: 52000,
      onSale: true,
      discountPercent: 15,
      isFeatured: true,
      banner: "banner-1.jpg",
      sizingInfo: {
        S: {
          bodyLength: '28"',
          chest: '38"',
          shoulders: '17"',
          sleeves: '33"',
        },
        M: {
          bodyLength: '29"',
          chest: '40"',
          shoulders: '18"',
          sleeves: '34"',
        },
        L: {
          bodyLength: '30"',
          chest: '42"',
          shoulders: '19"',
          sleeves: '35"',
        },
        XL: {
          bodyLength: '31"',
          chest: '44"',
          shoulders: '20"',
          sleeves: '36"',
        },
      },
      productVariants: [
        { size: "S", stock: 5 },
        { size: "M", stock: 8 },
        { size: "L", stock: 3 },
        { size: "XL", stock: 2 },
      ],
    },
    {
      name: "Brooks Brothers Long Sleeved Shirt",
      slug: "brooks-brothers-long-sleeved-shirt",
      category: "Men's Dress Shirts",
      description: "Timeless style and premium comfort",
      detail:
        "Crafted from superior Egyptian cotton with a non-iron finish. This shirt maintains its crisp appearance all day, making it perfect for professional settings.",
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg",
      ],
      price: 18500,
      onSale: false,
      discountPercent: null,
      isFeatured: true,
      banner: "banner-2.jpg",
      sizingInfo: {
        S: {
          bodyLength: '29"',
          chest: '39"',
          shoulders: '17.5"',
          sleeves: '34"',
        },
        M: {
          bodyLength: '30"',
          chest: '41"',
          shoulders: '18.5"',
          sleeves: '35"',
        },
        L: {
          bodyLength: '31"',
          chest: '43"',
          shoulders: '19.5"',
          sleeves: '36"',
        },
        XL: {
          bodyLength: '32"',
          chest: '45"',
          shoulders: '20.5"',
          sleeves: '37"',
        },
      },
      productVariants: [
        { size: "S", stock: 10 },
        { size: "M", stock: 15 },
        { size: "L", stock: 8 },
        { size: "XL", stock: 4 },
      ],
    },
    {
      name: "Tommy Hilfiger Classic Fit Dress Shirt",
      slug: "tommy-hilfiger-classic-fit-dress-shirt",
      category: "Men's Dress Shirts",
      description: "A perfect blend of sophistication and comfort",
      detail:
        "Features the iconic Tommy Hilfiger styling with a relaxed classic fit. Made from breathable cotton fabric that keeps you cool and comfortable throughout the day.",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
      ],
      price: 9000,
      onSale: true,
      discountPercent: 20,
      isFeatured: false,
      banner: null,
      sizingInfo: {
        M: {
          bodyLength: '29.5"',
          chest: '40"',
          shoulders: '18"',
          sleeves: '34.5"',
        },
        L: {
          bodyLength: '30.5"',
          chest: '42"',
          shoulders: '19"',
          sleeves: '35.5"',
        },
        XL: {
          bodyLength: '31.5"',
          chest: '44"',
          shoulders: '20"',
          sleeves: '36.5"',
        },
      },
      productVariants: [
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
        { size: "XL", stock: 0 },
      ],
    },
    {
      name: "Calvin Klein Slim Fit Stretch Shirt",
      slug: "calvin-klein-slim-fit-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Streamlined design with flexible stretch fabric",
      detail:
        "Modern slim fit design with 4-way stretch technology. Perfect for the contemporary professional who values both style and comfort. Machine washable for easy care.",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      price: 75000,
      onSale: false,
      discountPercent: null,
      isFeatured: false,
      banner: null,
      sizingInfo: {
        S: {
          bodyLength: '27.5"',
          chest: '36"',
          shoulders: '16.5"',
          sleeves: '33"',
        },
        M: {
          bodyLength: '28.5"',
          chest: '38"',
          shoulders: '17.5"',
          sleeves: '34"',
        },
        L: {
          bodyLength: '29.5"',
          chest: '40"',
          shoulders: '18.5"',
          sleeves: '35"',
        },
        XL: {
          bodyLength: '30.5"',
          chest: '42"',
          shoulders: '19.5"',
          sleeves: '36"',
        },
      },
      productVariants: [
        { size: "S", stock: 10 },
        { size: "M", stock: 12 },
        { size: "L", stock: 8 },
        { size: "XL", stock: 5 },
      ],
    },
    {
      name: "Polo Ralph Lauren Oxford Shirt",
      slug: "polo-ralph-lauren-oxford-shirt",
      category: "Men's Dress Shirts",
      description: "Iconic Polo design with refined oxford fabric",
      detail:
        "The classic button-down oxford shirt featuring the signature embroidered pony. Made from 100% cotton oxford cloth for durability and breathability.",
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg",
      ],
      price: 30000,
      onSale: true,
      discountPercent: 10,
      isFeatured: false,
      banner: null,
      sizingInfo: {
        S: {
          bodyLength: '28.5"',
          chest: '39"',
          shoulders: '17.5"',
          sleeves: '33.5"',
        },
        M: {
          bodyLength: '29.5"',
          chest: '41"',
          shoulders: '18.5"',
          sleeves: '34.5"',
        },
        L: {
          bodyLength: '30.5"',
          chest: '43"',
          shoulders: '19.5"',
          sleeves: '35.5"',
        },
        XL: {
          bodyLength: '31.5"',
          chest: '45"',
          shoulders: '20.5"',
          sleeves: '36.5"',
        },
      },
      productVariants: [
        { size: "S", stock: 6 },
        { size: "M", stock: 10 },
        { size: "L", stock: 4 },
        { size: "XL", stock: 2 },
      ],
    },
    {
      name: "Polo Classic Pink Hoodie",
      slug: "polo-classic-pink-hoodie",
      category: "Men's Sweatshirts",
      description: "Soft, stylish, and perfect for laid-back days",
      detail:
        "Ultra-soft fleece hoodie with the iconic Polo logo. Features a drawstring hood, kangaroo pocket, and ribbed cuffs for a comfortable fit. Perfect for casual wear or layering.",
      images: [
        "/images/sample-products/p6-1.jpg",
        "/images/sample-products/p6-2.jpg",
      ],
      price: 20000,
      onSale: false,
      discountPercent: null,
      isFeatured: true,
      banner: null,
      sizingInfo: {
        S: {
          bodyLength: '26"',
          chest: '20"',
          shoulders: '18"',
          sleeves: '24"',
        },
        M: {
          bodyLength: '27"',
          chest: '21"',
          shoulders: '19"',
          sleeves: '25"',
        },
        L: {
          bodyLength: '28"',
          chest: '22"',
          shoulders: '20"',
          sleeves: '26"',
        },
        XL: {
          bodyLength: '29"',
          chest: '23"',
          shoulders: '21"',
          sleeves: '27"',
        },
        XXL: {
          bodyLength: '30"',
          chest: '24"',
          shoulders: '22"',
          sleeves: '28"',
        },
      },
      productVariants: [
        { size: "S", stock: 8 },
        { size: "M", stock: 12 },
        { size: "L", stock: 6 },
        { size: "XL", stock: 4 },
        { size: "XXL", stock: 2 },
      ],
    },
  ],
};

export default sampleData;
