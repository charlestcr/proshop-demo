import React,{useState,useEffect} from 'react'
import products from '../products'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {useDispatch,useSelector} from 'react-redux'
import { listProduct, listProducts} from '../actions/productActions'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
//import axios from 'axios'


function HomeScreen({ history }) {
    //const[products,setProducts]=useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state=>state.productList)
    const {error,loading,products, page, pages} = productList

    let keyword = history.location.search
    useEffect(() =>{

        dispatch(listProducts(keyword))

        // async function fetchProducts(){
        //     const {data} = await axios.get('/api/products/')
        //     setProducts(data)
        // }

        // fetchProducts()
       
    } ,[dispatch, keyword])

  //  const products = []
    return (
        <div>

            {!keyword && <ProductCarousel />}
            <h1>Latest Products......... (Updated)</h1>

            {loading ? <Loader/>

                 : error ?  <Message variant='danger'>{error}</Message>
                    :
                    <div>
                    <Row>
                        {products.map(product =>(
                            <Col key= {product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }

            
        </div>
    )
}

export default HomeScreen
