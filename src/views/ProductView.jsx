import React, {useState} from 'react';
import Title from '@/components/layout/Title'
import ProductSection from '@/components/product/ProductSection'

const ProductView = () => {

    const [title, setTitle] = useState("all")
    const changeTitle = (value)=>{
        setTitle(value)
    }

    return (
        <div>
            <Title title="MD" />
            <ProductSection title={title}/>
        </div>
    );
};

export default ProductView;