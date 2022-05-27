import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const {data: products, isLoading, refetch} = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()));
    if(isLoading){
        return <div className='mb-14'><Loading></Loading></div>
    }
    return (
        <div>
            <h2>Products: {products?.length}</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    products?.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;