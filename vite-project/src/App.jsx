
import { useState } from 'react';
import './App.css';
import Card from './component/Card'
import NAvbar from "./component/NAvbar"
import Hero from './component/Hero/Hero';
import Footerer from "./component/Fotter"



function App() {
  const [showdata, setShowdata] = useState(false)
  const [carddata, setCarddata] = useState()
  const data = [

    {
      image: 'https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://f.nooncdn.com/p/v1686132049/N53347167A_1.jpg?format=avif&width=240',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    // {
    //   image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg',
    //   title: "Chair",
    //   desc: 'Golden Easy Sport Chair'
    // },
    // {
    //   image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg',
    //   title: "Chair",
    //   desc: 'Golden Easy Sport Chair'
    // },
    // {
    //   image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg',
    //   title: "Chair",
    //   desc: 'Golden Easy Sport Chair'
    // }, {
    //   image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg',
    //   title: "Chair",
    //   desc: 'Golden Easy Sport Chair'
    // },
    // {
    //   image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg',
    //   title: "Chair",
    //   desc: 'Golden Easy Sport Chair'
    // },
    // {
    //   image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg',
    //   title: "Chair",
    //   desc: 'Golden Easy Sport Chair'
    // },


  ]
  return (
    <>
      <NAvbar />
      <Hero />
      <div style={{ backgroundColor: "white" }} className='mt-5 '>

        <h1 style={{ fontSize: "20px", marginLeft: "30px", display: "inline-block" }}>Trending deals in TV & accessories</h1>
        <button style={{ marginLeft: "60%", marginBottom: "50px" }}>VIEW ALL</button>

        {showdata ? (<div >

          <img src={carddata.image} />
          <h1>{carddata.title}</h1>
          <p>{carddata.desc}</p>
        </div>) : (<div className='container'>
          <div className='row'>
            {data.map((e) => {
              return (
                <div className='col-md-4'>
                  <Card title={e.title} desc={e.desc} image={e.image} onClick={() => {
                    setShowdata(true)
                    setCarddata(e)
                  }} />
                </div>
              )
            })}
          </div>
        </div>)}
      </div>
      <Footerer />

    </>
  );
}

export default App
