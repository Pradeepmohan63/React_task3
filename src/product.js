import {Component} from 'react'
import './product.css'

class Product extends Component{
render(){
    const {data}=this.props
    console.log(data);
const product2 = data.map((e) => {
  return (
   
        
                <div className='product col2'>
                    
                       <div className='cards'>
                            <div className='card1 '>
                                <div>
                                    <img src={e.image} />
                                </div>
                                <div className='detail'>
                                    <h3>{e.detail1}</h3>
                                    <p>{e.detail2}</p>
                                </div>
                                <div className='pricing'>
                                    <div className='price'>
                                        <p>₹{e.price}</p>
                                    </div>
                                    <div className='cart'>
                                        <p>Add</p>
                                    </div>
                                </div>
                            </div>
                           

                            
                        </div>
                    
                </div>
            
     
  )

})
    return(
        <div className='container'>
            <h1>
                Your Favourite Picks
            </h1>
            <div className='row'>
                {product2}
            </div>
        </div>
  )
}
}
export default Product