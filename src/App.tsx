
import './App.css'
import { Link } from 'react-router'
import { Product } from "./features/products/components/Product";

export const App = () => {
  return (
    <>
      <h1>namahuのポートフォリオ</h1>
      <div className='navigation'>
        <Link to="#">自己紹介</Link>
        <Link to="#">作成物</Link>
      </div>
      <div className="biography">
        <h2>Profile</h2>
      </div>
      <div className="product">
        <h2>Product</h2>
        <Product />
      </div>
    </>
  )
};
