import logo from './logo.svg';
import './App.css';
import TaqCategoryList from './components/TaqCategoryList';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [TaqCategories,setTaqCategories] = useState([]);

  
  const getCategories = async () => {
    try {
      const TaqCateResponse = await axios.get("TAQcategory");
      setTaqCategories(TaqCateResponse.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  
  useEffect(() => {
    getCategories();
  }, []); 

  useEffect(() => {
    console.log("TaqCategories:", TaqCategories);
  }, [TaqCategories]); 

  return (
    <div className="container border my-3">
      <h1>Truong Anh Quan - call api</h1>


      <TaqCategoryList renderTaqCategories={TaqCategories} />
    </div>
  );
}

export default App;
