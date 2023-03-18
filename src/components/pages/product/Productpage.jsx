import React, {useState} from 'react';
import './productPage.css';
import Items from './Items';
import List from './List';
import {projects} from './Data';
 import { AnimatePresence } from 'framer-motion';

// find project category and add 'all' category.
const allNavList = [
  'all',...new Set(projects.map((project)=> project.category))];

const Productpage = () => {
  const [projectItems, setMenuItems] = useState(projects)
    //  
    const [navList, setCategories] = useState(allNavList);

    //  filteration of category 
    const filterItems = (category)=>{
        if(category === 'all'){
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter((item)=>item.category === category
        );
        setMenuItems(newProjectItems);
    }
  return (
     <section className="products section" id="work">
        <h2 className="section_title text-cs">Our Services</h2>
        <p className="section_subtitle">Choose the best option
        </p>
        <List list={navList} filterItems={filterItems}/>
        <div className="product_container container grid">
        <AnimatePresence initial={false}>
        <Items projectItems ={projectItems}/>
        </AnimatePresence>
        </div>
     </section>
  )
}

export default Productpage
