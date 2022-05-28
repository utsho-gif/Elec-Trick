import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const {data: products, isLoading} = useQuery('products', () => fetch('https://hidden-reef-48781.herokuapp.com/product').then(res => res.json()));
    if(isLoading){
        return <div className='mb-14'><Loading></Loading></div>
    }
    return (
        <div>
            <h2 className='text-2xl text-center mb-10'>Products</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    products?.reverse().slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;