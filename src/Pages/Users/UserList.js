import { useState } from 'react';
import { userRows } from './../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './UserList.css'


export default function UserList() {

  const [userDatas, setUserDatas] = useState(userRows)

  const userDelete = userID => {
    setUserDatas(userDatas.filter(user => user.id !== userID))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'user',
      headerName: 'User',
      width: 250,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              <img src={params.row.avatar} alt='' className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 200,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
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
            <Link to='/' className='link'>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
             className="userListDelete"
             onClick={() => userDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
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
