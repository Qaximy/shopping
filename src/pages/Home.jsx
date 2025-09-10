import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/products/FeaturedCollection"
import FeaturedSection from "../components/products/FeaturedSection"
import GenderCollection from "../components/products/GenderCollection"
import NewArrivals from "../components/products/NewArrivals"
import ProductDetails from "../components/products/ProductDetails"
import ProductGrid from "../components/products/ProductGrid"


const PlaceholderProducts =[
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
       {
        _id:5,
        name:"product 1",
        price : 100,
        images:[
            {url:"/src/assets/women5.webp"}
        ]
    },
    {
        _id:6,
        name:"product 2",
        price : 100,
        images:[
            {url:"/src/assets/img4.webp"}
        ]
    },
    {
        _id:7,
        name:"product 3",
        price : 150,
        images:[
            {url:"/src/assets/women3.webp"}
        ]
    },
    {
        _id:8,
        name:"product 4",
        price : 300,
        images:[
            {url:"/src/assets/women4.webp"}
        ]
    },
    
]
const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>

        {/* Best seller */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetails/>

        <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4">
                Top wears for Women
            </h2>
            <ProductGrid products={PlaceholderProducts}/>
        </div>
        <FeaturedCollection/>
        <FeaturedSection />
    </div>
  )
}

export default Home