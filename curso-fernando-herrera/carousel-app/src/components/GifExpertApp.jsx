import { useState } from "react";
import { AddCategory ,GifGrid} from "../components";



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Barcelona', 'PSG']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories, ]);
    // setCategories(cat => [...cat,'AJAX']);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifReactApp</h1>
      {/* input  */}
      <AddCategory      
        onNewCategory={onAddCategory}
      ></AddCategory>

      {/* lista gifs  */}
        {
          categories.map(category => {
            return (
              <GifGrid key={category} category={category} />
            )
          })
        }
      {/* gif item  */}


    </>
  )
}
