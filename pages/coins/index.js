import React from 'react'
import Axios from 'axios'

function coinList({coinData}) {

    console.log(coinData)
  return (
    <div>
       
        <h1>Coin List</h1>
        <h2>{coinData.coins.map((coin)=>{
            return(
                 <div>
                <h2>{coin.name}</h2>
                <img src={coin.icon}/>
                <p>{coin.price}</p>
            </div>
            )
               
            
            
        })}</h2>
       
    </div>
  )
}

export const getStaticProps = async({params})=>{

    const id = params.id
    const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0") 

    return{
        props:{
            coinData: data.data,
        }
    }
}
export default coinList