import { useEffect, useState } from "react";
import axios from "axios";

const NewCustomHook = () =>{

    const [data, setData] = useState();

    const myGetAPIHook = async(url) =>{
        axios.get(url).then((response) => {
            console.log('is this BSE API Custom Hook Area ???');  
            console.log(response.data.movies);
            setData(response.data.movies);
          });
    }

// useEffect(()=>{
//     console.log('use Effect....');

//     axios.get(url).then((response) => {
//       console.log('is this Movies API ???');  
//       console.log(response.data.movies);
//       setData(response.data.movies);
//     });


//     // myGetAPIHook('https://reactnative.dev/movies.json')
//   },[])

  return {data, myGetAPIHook}
}

export default NewCustomHook;