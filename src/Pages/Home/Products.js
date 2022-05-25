import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Products = () => {
    const {data: products, isLoading} = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()));
    return (
        <div>
            <h2>Products: {products?.length}</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;