import items from './data.js';
import { useState } from 'react';
import Categories from './Category.js';


const allCategories = ['All',...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "All"){
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <div className="App">
      <section>
        <header>
          <h1 className="app-title">Menu</h1>
        </header>

        <div className="category-menu">
          <Categories categories={categories} filterItems={filterItems}/>
        </div>


        <div className="container">
          {menuItems.map((item)=>{
            const {id, name, image, price, description} = item;
            return (
              <div className="menu-item" key={id}>
                <div className='item-name'>
                  <h1>{name}</h1>
                </div>
                <div className="img-container">
                  <img src={image} />
                </div>
                <div className='item-details'>
                  <p>{description}</p>
                </div>
                <div className='price-container'>
                  <div><span>$</span>{price}</div>
                  <button className='atc-btn'>Add to Cart</button>
                </div>
              </div>
            )
            })
          }
        </div>
      </section>


 
    </div>
  );
}

export default App;


