
import "./ProductList.css"
import Product from "../Product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create and inspire</h1>
                <p className="pl-desc">begoooooooooooooooooooooooooooo</p>
            </div>
            <div className="pl-list">
                <Product/>
            </div>
        </div>
    )
}

export default ProductList;