import logo from './logo.svg';
import './App.css';
import Product from './product'
function App() {

  const obj=[
    {
      image:"../../images/aavin1.webp",
      detail1:"Aavin Green Magic Fresh Milk(Pouch)",
      detail2:"500 ml",
      price:22

    },
    {
      image:"../../images/aavin2.jpeg",
      detail1:"Aavin Delite Premium Cow Milk",
      detail2:"500 ml",
      price:22

    },

    {
      image:"../../images/aavin3.webp",
      detail1:"Aavin Premium Fresh Full Cream..",
      detail2:"500 ml",
      price:30

    },

    {
      image:"../../images/onion.jpg",
      detail1:"Fresh Onion(Vengayam)",
      detail2:"1 kg",
      price:69

    },

    {
      image:"../../images/tomato.jpeg",
      detail1:"Tomato (Naatu Thakkali)",
      detail2:"1 kg",
      price:48

    },

    {
      image:"../../images/hatsun.jpeg",
      detail1:"Hatsun Curd Pouch..",
      detail2:"500 g",
      price:42

    },

    

  ]
  return (
    <div className="App">
     <Product data={obj}/>
    </div>
  );
}

export default App;
