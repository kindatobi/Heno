import { Product } from "@/types";
import { hashSync } from "bcrypt-ts-edge";

const sampleData: { products: Omit<Product, "id" | "createdAt">[] } = {
  users: [
    {
      name: "John Admin",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "ADMIN",
    },
    {
      name: "Jane Doe",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "USER",
    },
    {
      name: "Michael Smith",
      email: "michael@example.com",
      password: hashSync("123456", 10),
      role: "USER",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      password: hashSync("123456", 10),
      role: "USER",
    },
    {
      name: "David Lee",
      email: "david@example.com",
      password: hashSync("123456", 10),
      role: "ADMIN",
    },
  ],
  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: "TOPS",
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
          size: "S",
          bodyLength: '28"',
          chest: '38"',
        },
        {
          size: "M",
          bodyLength: '29"',
          chest: '40"',
        },
        {
          size: "L",
          bodyLength: '30"',
          chest: '42"',
        },
        {
          size: "XL",
          bodyLength: '31"',
          chest: '44"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 5 },
        { size: "M", stock: 8 },
        { size: "L", stock: 3 },
        { size: "XL", stock: 2 },
      ],
    },
    {
      name: "Brooks Brothers Long Sleeved Shirt",
      slug: "brooks-brothers-long-sleeved-shirt",
      category: "TOPS",
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
          size: "S",
          bodyLength: '29"',
          chest: '39"',
        },
        {
          size: "M",
          bodyLength: '30"',
          chest: '41"',
        },
        {
          size: "L",
          bodyLength: '31"',
          chest: '43"',
        },
        {
          size: "XL",
          bodyLength: '32"',
          chest: '45"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 10 },
        { size: "M", stock: 15 },
        { size: "L", stock: 8 },
        { size: "XL", stock: 4 },
      ],
    },
    {
      name: "Calvin Klein Slim Fit Stretch Shirt",
      slug: "calvin-klein-slim-fit-stretch-shirt",
      category: "TOPS",
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
          size: "S",
          bodyLength: '27.5"',
          chest: '36"',
        },
        {
          size: "M",
          bodyLength: '28.5"',
          chest: '38"',
        },
        {
          size: "L",
          bodyLength: '29.5"',
          chest: '40"',
        },
        {
          size: "XL",
          bodyLength: '30.5"',
          chest: '42"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 10 },
        { size: "M", stock: 12 },
        { size: "L", stock: 8 },
        { size: "XL", stock: 5 },
      ],
    },
    {
      name: "Polo Classic Pink Hoodie",
      slug: "polo-classic-pink-hoodie",
      category: "TOPS",
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
          size: "S",
          bodyLength: '26"',
          chest: '20"',
        },
        {
          size: "M",
          bodyLength: '27"',
          chest: '21"',
        },
        {
          size: "L",
          bodyLength: '28"',
          chest: '22"',
        },
        {
          size: "XL",
          bodyLength: '29"',
          chest: '23"',
        },
        {
          size: "XXL",
          bodyLength: '30"',
          chest: '24"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 8 },
        { size: "M", stock: 12 },
        { size: "L", stock: 6 },
        { size: "XL", stock: 4 },
        { size: "XXL", stock: 2 },
      ],
    },
    {
      name: "Levi's 511 Slim Fit Jeans",
      slug: "levis-511-slim-fit-jeans",
      category: "DENIMS",
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
          size: "S",
          bodyLength: '40"',
          chest: '30"',
        },
        {
          size: "M",
          bodyLength: '40"',
          chest: '32"',
        },
        {
          size: "L",
          bodyLength: '40"',
          chest: '34"',
        },
        {
          size: "XL",
          bodyLength: '40"',
          chest: '36"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 12 },
        { size: "M", stock: 18 },
        { size: "L", stock: 10 },
        { size: "XL", stock: 6 },
      ],
    },
    {
      name: "Diesel Sleenker Skinny Jeans",
      slug: "diesel-sleenker-skinny-jeans",
      category: "DENIMS",
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
          size: "S",
          bodyLength: '40"',
          chest: '29"',
        },
        {
          size: "M",
          bodyLength: '40"',
          chest: '31"',
        },
        {
          size: "L",
          bodyLength: '40"',
          chest: '33"',
        },
        {
          size: "XL",
          bodyLength: '40"',
          chest: '35"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 4 },
        { size: "M", stock: 8 },
        { size: "L", stock: 6 },
        { size: "XL", stock: 3 },
      ],
    },
    {
      name: "Classic Chino Pants",
      slug: "classic-chino-pants",
      category: "BOTTOMS",
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
          size: "S",
          bodyLength: '40"',
          chest: '30"',
        },
        {
          size: "M",
          bodyLength: '40"',
          chest: '32"',
        },
        {
          size: "L",
          bodyLength: '40"',
          chest: '34"',
        },
        {
          size: "XL",
          bodyLength: '40"',
          chest: '36"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 7 },
        { size: "M", stock: 14 },
        { size: "L", stock: 9 },
        { size: "XL", stock: 5 },
      ],
    },
    {
      name: "Premium Leather Biker Jacket",
      slug: "premium-leather-biker-jacket",
      category: "LEATHER",
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
          size: "S",
          bodyLength: '24"',
          chest: '38"',
        },
        {
          size: "M",
          bodyLength: '25"',
          chest: '40"',
        },
        {
          size: "L",
          bodyLength: '26"',
          chest: '42"',
        },
        {
          size: "XL",
          bodyLength: '27"',
          chest: '44"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 3 },
        { size: "M", stock: 5 },
        { size: "L", stock: 4 },
        { size: "XL", stock: 2 },
      ],
    },
    {
      name: "North Face Puffer Jacket",
      slug: "north-face-puffer-jacket",
      category: "OUTERWEAR",
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
          size: "S",
          bodyLength: '27"',
          chest: '40"',
        },
        {
          size: "M",
          bodyLength: '28"',
          chest: '42"',
        },
        {
          size: "L",
          bodyLength: '29"',
          chest: '44"',
        },
        {
          size: "XL",
          bodyLength: '30"',
          chest: '46"',
        },
        {
          size: "XXL",
          bodyLength: '31"',
          chest: '48"',
        },
      ],
      sizeStock: [
        { size: "S", stock: 8 },
        { size: "M", stock: 15 },
        { size: "L", stock: 10 },
        { size: "XL", stock: 6 },
        { size: "XXL", stock: 3 },
      ],
    },
    {
      name: "Aviator Sunglasses",
      slug: "aviator-sunglasses",
      category: "ACCESSORIES",
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
      sizeStock: [{ size: "ONE_SIZE", stock: 40 }],
    },
  ],
};

export default sampleData;
