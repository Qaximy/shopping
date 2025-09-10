import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const SelectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  OriginalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "/src/assets/women1.webp",
      altText: "Stylish Jacket 1",
    },
    {
      url: "/src/assets/img2.webp",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProducts =[
    {
        _id:1,
        name:"product 1",
        price : 100,
        images:[
            {url:"/src/assets/women5.webp"}
        ]
    },
    {
        _id:2,
        name:"product 2",
        price : 100,
        images:[
            {url:"/src/assets/img4.webp"}
        ]
    },
    {
        _id:3,
        name:"product 3",
        price : 150,
        images:[
            {url:"/src/assets/women3.webp"}
        ]
    },
    {
        _id:4,
        name:"product 4",
        price : 300,
        images:[
            {url:"/src/assets/women4.webp"}
        ]
    },
]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (SelectedProduct?.images?.length > 0) {
      setMainImage(SelectedProduct.images[0].url);
    }
  }, []);

  // Disable button until both size & color are chosen
  useEffect(() => {
    if (selectedSize && selectedColor) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedSize, selectedColor]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if(!selectedSize || !selectedColor){
        toast.error("please select a size and color before adding to cart", {
            duration:1000,
        })
        return
    }

    setIsButtonDisabled(true)

    setTimeout(() =>{
        toast.success("Product added to cart!" ,{
            duration:1000,
        })

    },500)
    
  
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg ">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {SelectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="md:w-1/2 ">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* mobile thumbnails */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {SelectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl mb-2 ">
              {SelectedProduct.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-2">
              <p className="text-lg text-gray-600 line-through">
                ${SelectedProduct.OriginalPrice}
              </p>
              <p className="text-xl font-semibold text-gray-800">
                ${SelectedProduct.price}
              </p>
            </div>

            <p className="text-gray-600 mb-2">{SelectedProduct.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {SelectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color ? "ring-2 ring-black" : ""
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {SelectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={handleDecrease}
                  className="px-3 py-2 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="px-3 py-2 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`py-2 px-6 rounded w-full mb-4 transition ${
                isButtonDisabled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              ADD TO CART
            </button>

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{SelectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{SelectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
                You May Also Like
            </h2>
            <ProductGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
