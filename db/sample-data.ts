import {
  ProductCategory,
  ProductSize,
  UserRole,
} from "@/app/generated/prisma/client";
import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "John Admin",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "ADMIN" as UserRole,
    },
    {
      name: "Jane Doe",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "USER" as UserRole,
    },
    {
      name: "Michael Smith",
      email: "michael@example.com",
      password: hashSync("123456", 10),
      role: "USER" as UserRole,
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      password: hashSync("123456", 10),
      role: "USER" as UserRole,
    },
    {
      name: "David Lee",
      email: "david@example.com",
      password: hashSync("123456", 10),
      role: "ADMIN" as UserRole,
    },
  ],
  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: ProductCategory.TOPS,
      color: "White",
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
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '28"',
          chest: '38"',
        },
        {
          size: ProductSize.M,
          bodyLength: '29"',
          chest: '40"',
        },
        {
          size: ProductSize.L,
          bodyLength: '30"',
          chest: '42"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '31"',
          chest: '44"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 5 },
        { size: ProductSize.M, stock: 8 },
        { size: ProductSize.L, stock: 3 },
        { size: ProductSize.XL, stock: 2 },
      ],
    },
    {
      name: "Brooks Brothers Long Sleeved Shirt",
      slug: "brooks-brothers-long-sleeved-shirt",
      category: ProductCategory.TOPS,
      color: "Light Blue",
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
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '29"',
          chest: '39"',
        },
        {
          size: ProductSize.M,
          bodyLength: '30"',
          chest: '41"',
        },
        {
          size: ProductSize.L,
          bodyLength: '31"',
          chest: '43"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '32"',
          chest: '45"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 10 },
        { size: ProductSize.M, stock: 15 },
        { size: ProductSize.L, stock: 8 },
        { size: ProductSize.XL, stock: 4 },
      ],
    },
    {
      name: "Calvin Klein Slim Fit Stretch Shirt",
      slug: "calvin-klein-slim-fit-stretch-shirt",
      category: ProductCategory.TOPS,
      color: "Black",
      description: "Streamlined design with stretch fabric",
      detail:
        "Modern slim fit design with 4-way stretch technology. Perfect for the contemporary professional who values both style and comfort. Machine washable for easy care.",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
      ],
      price: 75000,
      onSale: false,
      discountPercent: null,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '27.5"',
          chest: '36"',
        },
        {
          size: ProductSize.M,
          bodyLength: '28.5"',
          chest: '38"',
        },
        {
          size: ProductSize.L,
          bodyLength: '29.5"',
          chest: '40"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '30.5"',
          chest: '42"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 10 },
        { size: ProductSize.M, stock: 12 },
        { size: ProductSize.L, stock: 8 },
        { size: ProductSize.XL, stock: 5 },
      ],
    },
    {
      name: "Polo Classic Pink Hoodie",
      slug: "polo-classic-pink-hoodie",
      category: ProductCategory.TOPS,
      color: "Pink",
      description: "Soft and stylish for laid-back days",
      detail:
        "Ultra-soft fleece hoodie with the iconic Polo logo. Features a drawstring hood, kangaroo pocket, and ribbed cuffs for a comfortable fit. Perfect for casual wear or layering.",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      price: 20000,
      onSale: false,
      discountPercent: null,
      isFeatured: true,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '26"',
          chest: '20"',
        },
        {
          size: ProductSize.M,
          bodyLength: '27"',
          chest: '21"',
        },
        {
          size: ProductSize.L,
          bodyLength: '28"',
          chest: '22"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '29"',
          chest: '23"',
        },
        {
          size: ProductSize.XXL,
          bodyLength: '30"',
          chest: '24"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 8 },
        { size: ProductSize.M, stock: 12 },
        { size: ProductSize.L, stock: 6 },
        { size: ProductSize.XL, stock: 4 },
        { size: ProductSize.XXL, stock: 2 },
      ],
    },
    {
      name: "Levi's 511 Slim Fit Jeans",
      slug: "levis-511-slim-fit-jeans",
      category: ProductCategory.DENIMS,
      color: "Dark Blue",
      description: "Perfect slim fit denim for everyday",
      detail:
        "Iconic Levi's 511 slim fit jeans crafted from premium stretch denim. Sits below the waist with a slim fit from hip to ankle. Features the classic 5-pocket styling and signature red tab.",
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg",
      ],
      price: 65000,
      onSale: true,
      discountPercent: 25,
      isFeatured: true,
      banner: "banner-3.jpg",
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '40"',
          chest: '30"',
        },
        {
          size: ProductSize.M,
          bodyLength: '40"',
          chest: '32"',
        },
        {
          size: ProductSize.L,
          bodyLength: '40"',
          chest: '34"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '40"',
          chest: '36"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 12 },
        { size: ProductSize.M, stock: 18 },
        { size: ProductSize.L, stock: 10 },
        { size: ProductSize.XL, stock: 6 },
      ],
    },
    {
      name: "Diesel Sleenker Skinny Jeans",
      slug: "diesel-sleenker-skinny-jeans",
      category: ProductCategory.DENIMS,
      color: "Black",
      description: "Ultra-modern skinny fit premium denim",
      detail:
        "Premium Italian denim with superior stretch recovery. The Sleenker features an ultra-skinny fit that's comfortable and stylish. Finished with signature Diesel hardware and detailing.",
      images: [
        "/images/sample-products/p6-1.jpg",
        "/images/sample-products/p6-2.jpg",
      ],
      price: 98000,
      onSale: true,
      discountPercent: 15,
      isFeatured: true,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '40"',
          chest: '29"',
        },
        {
          size: ProductSize.M,
          bodyLength: '40"',
          chest: '31"',
        },
        {
          size: ProductSize.L,
          bodyLength: '40"',
          chest: '33"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '40"',
          chest: '35"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 4 },
        { size: ProductSize.M, stock: 8 },
        { size: ProductSize.L, stock: 6 },
        { size: ProductSize.XL, stock: 3 },
      ],
    },
    {
      name: "Classic Chino Pants",
      slug: "classic-chino-pants",
      category: ProductCategory.BOTTOMS,
      color: "Khaki",
      description: "Versatile chinos for any occasion",
      detail:
        "Premium cotton chino pants with a modern slim fit. Perfect for business casual or smart casual occasions. Features flat front styling and slant pockets.",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
      ],
      price: 42000,
      onSale: true,
      discountPercent: 20,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '40"',
          chest: '30"',
        },
        {
          size: ProductSize.M,
          bodyLength: '40"',
          chest: '32"',
        },
        {
          size: ProductSize.L,
          bodyLength: '40"',
          chest: '34"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '40"',
          chest: '36"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 7 },
        { size: ProductSize.M, stock: 14 },
        { size: ProductSize.L, stock: 9 },
        { size: ProductSize.XL, stock: 5 },
      ],
    },
    {
      name: "Premium Leather Biker Jacket",
      slug: "premium-leather-biker-jacket",
      category: ProductCategory.LEATHER,
      color: "Black",
      description: "Classic biker style in genuine leather",
      detail:
        "Crafted from premium genuine leather with asymmetric zip closure. Features multiple pockets, belted waist, and quilted shoulder panels. Fully lined for comfort. A timeless piece that gets better with age.",
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg",
      ],
      price: 285000,
      onSale: false,
      discountPercent: null,
      isFeatured: true,
      banner: "banner-4.jpg",
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '24"',
          chest: '38"',
        },
        {
          size: ProductSize.M,
          bodyLength: '25"',
          chest: '40"',
        },
        {
          size: ProductSize.L,
          bodyLength: '26"',
          chest: '42"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '27"',
          chest: '44"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 3 },
        { size: ProductSize.M, stock: 5 },
        { size: ProductSize.L, stock: 4 },
        { size: ProductSize.XL, stock: 2 },
      ],
    },
    {
      name: "North Face Puffer Jacket",
      slug: "north-face-puffer-jacket",
      category: ProductCategory.OUTERWEAR,
      color: "Navy",
      description: "Warm and lightweight winter essential",
      detail:
        "Down-filled puffer jacket with water-resistant outer shell. Features adjustable hood, zippered pockets, and elastic cuffs. Provides excellent warmth without the bulk.",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
      ],
      price: 125000,
      onSale: true,
      discountPercent: 30,
      isFeatured: true,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '27"',
          chest: '40"',
        },
        {
          size: ProductSize.M,
          bodyLength: '28"',
          chest: '42"',
        },
        {
          size: ProductSize.L,
          bodyLength: '29"',
          chest: '44"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '30"',
          chest: '46"',
        },
        {
          size: ProductSize.XXL,
          bodyLength: '31"',
          chest: '48"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 8 },
        { size: ProductSize.M, stock: 15 },
        { size: ProductSize.L, stock: 10 },
        { size: ProductSize.XL, stock: 6 },
        { size: ProductSize.XXL, stock: 3 },
      ],
    },
    {
      name: "Aviator Sunglasses",
      slug: "aviator-sunglasses",
      category: ProductCategory.ACCESSORIES,
      color: "Gold/Brown",
      description: "Classic aviators with UV protection",
      detail:
        "Timeless aviator sunglasses with metal frame and gradient lenses. Provides 100% UV protection. Comes with protective case and cleaning cloth. A wardrobe staple that never goes out of style.",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      price: 22000,
      onSale: false,
      discountPercent: null,
      isFeatured: false,
      banner: null,
      sizingInfo: null,
      sizeStock: [{ size: ProductSize.ONE_SIZE, stock: 40 }],
    },
  ],
};

export default sampleData;
