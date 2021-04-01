import React from "react"
import {Link} from "react-router-dom"



const ItemList = () => {
    return (
        <div id="item-list">
            <Link to="/ItemInfo">
                <button >Item</button>
            </Link>
            <Link to="/ItemInfo">
                <button >Item</button>
            </Link>
            <Link to="/ItemInfo">
                <button >Item</button>
            </Link>
            <Link to="/ItemInfo">
                <button >Item</button>
            </Link>
            <ItemRow/>
            <ItemRow/>
            <ItemRow/>
            <ItemRow/>
            <ItemRow/>
        </div>
    )
}

const ItemRow = () => {
    return (
        <div>An Item</div>
    )
}

const ItemInfo = () => {
    return (
        <div>
            <p>Name of Item Here</p>
            <p>Price of Item</p>
            <p>Description of Item</p>
            <p>Steal All Your Money (Buy)</p>
        </div>
    )
}

export {
    ItemList,
    ItemRow,
    ItemInfo
}