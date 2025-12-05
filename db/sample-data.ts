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
      name: "Rosa Shirt Tobacco",
      slug: "rosa-shirt-tobacco",
      category: ProductCategory.TOPS,
      color: "Tobacco",
      description: "Classic Polo style with modern comfort",
      detail:
        "Made from premium stretch cotton blend for maximum comfort and flexibility. Features moisture-wicking technology and a tailored fit that moves with you throughout the day.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 52000,
      onSale: true,
      discountPercent: 15,
      isFeatured: true,
      banner: "/images/banner-1.jpg",
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
      name: "Classic Cotton Tee Black",
      slug: "classic-cotton-tee-black",
      category: ProductCategory.TOPS,
      color: "Black",
      description: "Essential everyday t-shirt with premium finish",
      detail:
        "Crafted from 100% organic cotton with a relaxed fit. Pre-washed for softness and features reinforced shoulder seams for durability. Perfect layering piece or standalone statement.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 38000,
      onSale: false,
      discountPercent: 0,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '27"',
          chest: '36"',
        },
        {
          size: ProductSize.M,
          bodyLength: '28"',
          chest: '38"',
        },
        {
          size: ProductSize.L,
          bodyLength: '29"',
          chest: '40"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '30"',
          chest: '42"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 12 },
        { size: ProductSize.M, stock: 15 },
        { size: ProductSize.L, stock: 10 },
        { size: ProductSize.XL, stock: 7 },
      ],
    },
    {
      name: "Slim Fit Chino Navy",
      slug: "slim-fit-chino-navy",
      category: ProductCategory.BOTTOMS,
      color: "Navy",
      description: "Tailored chinos for the modern professional",
      detail:
        "Premium stretch twill fabric with a contemporary slim fit. Features hidden button closure, side pockets, and welt back pockets. Wrinkle-resistant finish makes these perfect for travel.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 68000,
      onSale: true,
      discountPercent: 20,
      isFeatured: true,
      banner: "/images/banner-2.jpg",
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '40"',
          chest: '30"',
        },
        {
          size: ProductSize.M,
          bodyLength: '41"',
          chest: '32"',
        },
        {
          size: ProductSize.L,
          bodyLength: '42"',
          chest: '34"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '43"',
          chest: '36"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 6 },
        { size: ProductSize.M, stock: 9 },
        { size: ProductSize.L, stock: 11 },
        { size: ProductSize.XL, stock: 4 },
      ],
    },
    {
      name: "Merino Wool Sweater Grey",
      slug: "merino-wool-sweater-grey",
      category: ProductCategory.TOPS,
      color: "Grey",
      description: "Luxurious warmth meets sophisticated style",
      detail:
        "100% extra-fine merino wool with ribbed crew neck and cuffs. Naturally temperature-regulating and odor-resistant. Machine washable for easy care without sacrificing quality.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 95000,
      onSale: false,
      discountPercent: 0,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '26"',
          chest: '38"',
        },
        {
          size: ProductSize.M,
          bodyLength: '27"',
          chest: '40"',
        },
        {
          size: ProductSize.L,
          bodyLength: '28"',
          chest: '42"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '29"',
          chest: '44"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 4 },
        { size: ProductSize.M, stock: 6 },
        { size: ProductSize.L, stock: 5 },
        { size: ProductSize.XL, stock: 3 },
      ],
    },
    {
      name: "Cargo Joggers Olive",
      slug: "cargo-joggers-olive",
      category: ProductCategory.BOTTOMS,
      color: "Olive",
      description: "Street style meets functional design",
      detail:
        "Durable cotton-poly blend with adjustable ankle cuffs and elastic waistband. Multiple cargo pockets provide ample storage. Tapered fit offers a contemporary silhouette with ultimate comfort.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 72000,
      onSale: true,
      discountPercent: 25,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '38"',
          chest: '28"',
        },
        {
          size: ProductSize.M,
          bodyLength: '39"',
          chest: '30"',
        },
        {
          size: ProductSize.L,
          bodyLength: '40"',
          chest: '32"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '41"',
          chest: '34"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 8 },
        { size: ProductSize.M, stock: 12 },
        { size: ProductSize.L, stock: 14 },
        { size: ProductSize.XL, stock: 6 },
      ],
    },
    {
      name: "Oxford Button Down White",
      slug: "oxford-button-down-white",
      category: ProductCategory.TOPS,
      color: "White",
      description: "Timeless elegance for any occasion",
      detail:
        "Premium Oxford cotton with button-down collar and chest pocket. Tailored fit through the body with extra length for tucking. Easy-iron finish keeps you looking sharp all day long.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 58000,
      onSale: false,
      discountPercent: 0,
      isFeatured: false,
      banner: null,
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
        { size: ProductSize.M, stock: 13 },
        { size: ProductSize.L, stock: 9 },
        { size: ProductSize.XL, stock: 5 },
      ],
    },
    {
      name: "Denim Jacket Indigo",
      slug: "denim-jacket-indigo",
      category: ProductCategory.OUTERWEAR,
      color: "Indigo",
      description: "Classic denim with a modern edge",
      detail:
        "Heavyweight selvedge denim that ages beautifully over time. Features brass hardware, chest pockets, and adjustable waist tabs. Slightly oversized fit perfect for layering over hoodies or sweaters.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 128000,
      onSale: true,
      discountPercent: 10,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '25"',
          chest: '40"',
        },
        {
          size: ProductSize.M,
          bodyLength: '26"',
          chest: '42"',
        },
        {
          size: ProductSize.L,
          bodyLength: '27"',
          chest: '44"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '28"',
          chest: '46"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 3 },
        { size: ProductSize.M, stock: 7 },
        { size: ProductSize.L, stock: 6 },
        { size: ProductSize.XL, stock: 2 },
      ],
    },
    {
      name: "Track Shorts Charcoal",
      slug: "track-shorts-charcoal",
      category: ProductCategory.BOTTOMS,
      color: "Charcoal",
      description: "Performance meets everyday comfort",
      detail:
        "Quick-dry technical fabric with built-in liner and deep side pockets. Elastic waistband with internal drawstring for secure fit. Reflective details for visibility during evening runs.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 42000,
      onSale: false,
      discountPercent: 0,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '18"',
          chest: '28"',
        },
        {
          size: ProductSize.M,
          bodyLength: '19"',
          chest: '30"',
        },
        {
          size: ProductSize.L,
          bodyLength: '20"',
          chest: '32"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '21"',
          chest: '34"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 15 },
        { size: ProductSize.M, stock: 18 },
        { size: ProductSize.L, stock: 12 },
        { size: ProductSize.XL, stock: 8 },
      ],
    },
    {
      name: "Henley Longsleeve Burgundy",
      slug: "henley-longsleeve-burgundy",
      category: ProductCategory.TOPS,
      color: "Burgundy",
      description: "Refined casual style for cooler days",
      detail:
        "Soft cotton-modal blend with three-button placket and contrast stitching. Slim fit design with extra length sleeves. Perfect transition piece from season to season.",
      shopImage:
        "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
      showcaseImages: {
        spin360: {
          left: [
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-04.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-05.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-06.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-07.webp",
            "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-08.webp",
          ],
          right: [
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-01.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-02.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-03.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-04.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-05.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-06.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-07.webp",
            "/images/rosa-sh-tobacco/right/entire-studios-rosa-shirt-tobacco-delilah-08.webp",
          ],
        },
        regular: [
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-01.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-02.webp",
          "/images/rosa-sh-tobacco/left/entire-studios-rosa-shirt-tobacco-ibby-03.webp",
        ],
      },
      price: 54000,
      onSale: true,
      discountPercent: 18,
      isFeatured: false,
      banner: null,
      sizingInfo: [
        {
          size: ProductSize.S,
          bodyLength: '28"',
          chest: '37"',
        },
        {
          size: ProductSize.M,
          bodyLength: '29"',
          chest: '39"',
        },
        {
          size: ProductSize.L,
          bodyLength: '30"',
          chest: '41"',
        },
        {
          size: ProductSize.XL,
          bodyLength: '31"',
          chest: '43"',
        },
      ],
      sizeStock: [
        { size: ProductSize.S, stock: 7 },
        { size: ProductSize.M, stock: 11 },
        { size: ProductSize.L, stock: 8 },
        { size: ProductSize.XL, stock: 4 },
      ],
    },
  ],
};

export default sampleData;
