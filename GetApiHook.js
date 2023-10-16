import { useEffect, useState } from "react";
import axios from "axios";

const getApiHook=(url)=>{
    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get(url).then((response) => {
          setData(response.data.movies);
        });
      },[])
      return { data };
}

export default getApiHook;
