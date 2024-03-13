
//import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
//import axios from 'axios';
//import products from "../products";
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  // useEffect(() => {
  //   const fetchProducts = async () => { 
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };
 
  //   fetchProducts();
  // }, []);

  return (
      <>
        { isLoading ? (
        <Loader />
        ) : error ? (
        <Message variant ='danger'>{ error?.data?.message || error.error }</Message>
        ) : (
          <>
            <h1>Latest Products</h1>
            <Row>
                {products.map ((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                    </Col>
                ))}
            </Row>
          </>)}
        </>

  )
}

export default HomeScreen


// const HomeScreen = () => {
//   return (
//       <>
//           <h1>Latest Products</h1>
//           <Row>
//               {products.map ((product) => (
//                   <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                     <Product product={product}/>
//                   </Col>
//               )) }
//           </Row>
//       </>
//   )
// }

// export default HomeScreen