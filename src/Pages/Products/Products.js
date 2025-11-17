import { useState } from 'react';
import { products } from './../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './Products.css'


export default function Products() {

  const [productDatas, setProductsDatas] = useState(products)

  const productDelete = productID => {
    setProductsDatas(productDatas.filter(product => product.id !== productID))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className='link'>
            <div className='productListTitle'>
              <img src={params.row.avatar}  alt='' className="productListImg" />
              {params.row.title}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'in_stock',
      headerName: 'In Stock',
      width: 100,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='actionItems'>
            <Link to={`/product/${params.row.id}`} className='link'>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
             className="productListDelete"
             onClick={() => productDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={productDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
