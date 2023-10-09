import React, { useEffect} from 'react'
import axios from 'axios';
import 

export const App = () => {

useEffect(() => {

    axios.get('../data/data2')
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error('Błąd:', error);
      });
},[])



  
  return (
    <div>App</div>
  )
}
