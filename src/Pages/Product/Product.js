import { Link } from 'react-router-dom';
import Chart from '../../Components/Chart/Chart';
import { productsData, products } from './../../datas';
import PublishIcon from "@mui/icons-material/Publish";
import { useState } from 'react';

import './Product.css';


export default function Product() {
    
    let ID = window.location.href.split('/')[4]
    let x = products.filter(p => p.id == ID)

    const[prDatas, setprDatas] = useState(x)
    const[displayState, setDisplayState] = useState('none')

    const uploadHandler = () => {setDisplayState('inline')}
    
    
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className='productTopLeft'>
                    <Chart title='Sale In Month' data={productsData} grid />
                </div>
                <div className="productTopRight">
                    <div>
                        <div className="productInfoTop">
                            <span className='productName'>{prDatas[0].title} LapTop</span>
                            {/* <img src="/images/dell.jpg" alt="Dell LapTop" className='productInfoImg' /> */}
                        </div>

                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <div className="productInfoKey">ID: </div>
                                <div className="productInfoValue">132</div>
                            </div>
                            <div className="productInfoItem">
                                <div className="productInfoKey">Name: </div>
                                <div className="productInfoValue">{prDatas[0].title} Laptop</div>
                            </div>
                            <div className="productInfoItem">
                                <div className="productInfoKey">Sales: </div>
                                <div className="productInfoValue">$90000</div>
                            </div>
                            <div className="productInfoItem">
                                <div className="productInfoKey">Active: </div>
                                <div className="productInfoValue">Yes</div>
                            </div>
                            <div className="productInfoItem">
                                <div className="productInfoKey">In Stock: </div>
                                <div className="productInfoValue">{prDatas[0].in_stock}</div>
                            </div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/dell.jpg'} alt='' className='productInfoImg' />

                </div>

            </div>

            <div className="productBottom">
                <form className="productForm">

                    <div className='productFormLeft'>
                        <label>Product Name</label>
                        <input type="text" placeholder='Dell Laptop' />

                        <label>In Stock</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>

                    <div className='productFormRight'>

                        <div className='productUploader'>
                            <img src={process.env.PUBLIC_URL + '/images/dell.jpg'} alt="profile" className='productUploaderImg' />
                            <label>
                                <PublishIcon onClick={() => uploadHandler()}/>
                            </label>
                            <input type="file"  style={{ display: displayState }} />
                        </div>

                        <button  disabled className='productButton'>Upload (Edit)</button>

                    </div>

                </form>
            </div>
        </div>
    )
}
