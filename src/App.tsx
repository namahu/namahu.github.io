
import './App.css'
import { Link } from 'react-router'

export const App = () => {
  return (
    <>
      <h1>namahuのポートフォリオ</h1>
      <div className='navigation'>
        <Link to="#">自己紹介</Link>
        <Link to="#">作成物</Link>
      </div>
      <div className="biography">
        自己紹介部分
      </div>
      <div className="product">
        作成したもの
      </div>
    </>
  )
};
