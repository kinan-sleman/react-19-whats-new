import { memo, useState, useTransition } from "react"
import products, { type Product } from "../data"
import { sleep } from "../utils"

export default function UseTransition() {
    const [tab, setTab] = useState("home")
    const [isPending, startTransition] = useTransition()
    function switchTab(tab: string) {
        startTransition(() => {
            setTab(tab)
        })
    }

    function setStyles(thisTab: string) {
        return {
            backgroundColor: tab === thisTab ? "#262626" : "white",
            color: tab === thisTab ? "white" : "black"
        }
    }

    return (
        <main>
            <nav>
                <button
                    onClick={() => switchTab("home")}
                    style={setStyles("home")}
                >Home</button>
                <button
                    onClick={() => switchTab("products")}
                    style={setStyles("products")}
                >Products</button>
                <button
                    onClick={() => switchTab("about")}
                    style={setStyles("about")}
                >About</button>
            </nav>
            <div>
                {isPending && <p>Loading...</p>}
                {!isPending && tab === "home" && <h1>Home page</h1>}
                {!isPending && tab === "products" && <Products />}
                {!isPending && tab === "about" && <h1>About page</h1>}
            </div>
        </main>
    )
}

const Products = memo(function () {
    let productsList = products.map((product) => (
        <SlowProduct key={product.id} product={product} />
    ))

    return (
        <>
            <h1>Products page</h1>
            <ul>{productsList}</ul>
        </>
    )
});

function SlowProduct({ product }: { product: Product }) {
    sleep(1)
    return <li>Product {product.name}</li>
}
