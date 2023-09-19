import { useState } from "react";
import Input from "./Input";

export default function ProductPage() {
    const [products, SetProduct] = useState([
        { id: 0, name: "Cousin" },
        { id: 1, name: "Slave" }])

    const ChangeState = (name) => {
        SetProduct((products)=>[...products, { id: products.length, name: name }])
    };

    return (
        <>
            <Input ChangeState={ChangeState}></Input>
        </>
    );
}