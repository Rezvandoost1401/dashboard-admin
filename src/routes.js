import Home from './Pages/Home/Home'
import NewUser from './Pages/NewUser/NewUser'
import UserList from './Pages/Users/UserList'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'
import Manage from './Pages/Manage/Manage'



let routes = [
    {path: '/dashboard-admin', element: <Home /> },
    {path: '/users', element: <UserList /> },
    {path: '/newuser', element: <NewUser /> },
    {path: '/products', element: <Products /> },
    {path: '/product/:productID', element: <Product /> },
    {path: '/manage', element: <Manage /> },
]


export default routes