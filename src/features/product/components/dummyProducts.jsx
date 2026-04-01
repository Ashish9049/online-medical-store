import product1 from "../../../assets/products/product-1.png";
import product2 from "../../../assets/products/product-2.png";
import product3 from "../../../assets/products/product-3.png";
import product4 from "../../../assets/products/product-4.png";
import product5 from "../../../assets/products/product-5.png"; 
import product7 from "../../../assets/products/product-7.png";
import product8 from "../../../assets/products/product-8.png";
import product9 from "../../../assets/products/product-9.png";
import product10 from "../../../assets/products/product-10.png";
import product11 from "../../../assets/products/product-11.png";
import product12 from "../../../assets/products/product-12.png";
import product13 from "../../../assets/products/product-13.png";
import product14 from "../../../assets/products/product-14.png";
import product15 from "../../../assets/products/product-15.png";
import product16 from "../../../assets/products/product-16.png";   
import product17 from "../../../assets/products/product-17.png";
import product18 from "../../../assets/products/product-18.png";
import product19 from "../../../assets/products/product-19.png";
import product20 from "../../../assets/products/product-20.png";

const productImages = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
];

const productNames = [
  "Paracetamol 500mg",
  "Vitamin C Tablets",
  "Vitamin D3 Capsules",
  "Ibuprofen 400mg",
  "Cough Syrup",
  "Blood Pressure Monitor",
  "Glucometer",
  "Hand Sanitizer",
  "Face Mask",
  "Pain Relief Gel",
  "Antiseptic Liquid",
  "Multivitamin Tablets",
  "Protein Powder",
  "Baby Shampoo",
  "Baby Diapers",
  "Ayurvedic Chyawanprash",
  "Herbal Hair Oil",
  "Skin Care Cream",
  "Body Lotion",
];

const productCategories = [
  "Tablets",
  "Tablets",
  "Capsules",
  "Tablets",
  "Syrups",
  "Medical Devices",
  "Medical Devices",
  "Personal Care",
  "Personal Care",
  "Personal Care",
  "Personal Care",
  "Tablets",
  "Protein Powder",
  "Baby Care",
  "Baby Care",
  "Ayurvedic",
  "Ayurvedic",
  "Personal Care",
  "Personal Care",
];

const dummyProducts = Array.from({ length: 120 }, (_, index) => ({
  id: index + 1,
  name: productNames[index % productNames.length],
  category: productCategories[index % productCategories.length],
  price: Math.floor(Math.random() * 2000) + 50,
  image: productImages[index % productImages.length],
}));

export default dummyProducts;
