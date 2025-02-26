import { useState } from "react";
import menu from './data';
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";


const allCategories = ['all', ...new Set(menu.map((item) => item.category))]


const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const filterCategories = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newCategory = menu.filter((item) => item.category === category)
    setMenuItems(newCategory)
  }
  return <main>
    <section className="menu">
      <Title text="Our Menu" />
      <Categories categories={categories} filterCategories={filterCategories} />
      <Menu items={menuItems} />
    
    </section>
   
  </main>;
};
export default App;
