import { useEffect, useState } from "react";
import axios from "axios";

const PostAPIHooks=()=>{
    const [data, setData] = useState(null);
    
    const signup = async (email, password, displayName) => {
        
        const url = 'https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/signup';
        const params = {email:'hamza@gmail.com',
                        password:'1234567890',
                        display_name:'Hamza',
                       }
        const headers = {
            'Content-Type': 'application/json',
          }

        axios.post(url, params, {
            headers: headers
          }).then(res => 
            
            {
              console.log('I Am Success == ',res.data)
            }
            ).catch(err => 
              {
                console.log('is this Error ===',err)}
              )

      // const url = 'https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/signup'
      //   try {
      //     const response = await fetch(url, {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ email: 'ali1@gmail.com', password: '1234567890', display_name: 'Ali Akbar Ali' }),
      //     });
      //     const json = await response.json();
      //     console.log('Success',json);
      //     // setData(json);
      //   } catch (error) {
      //     console.log('Failure', error);
      //     // setData(error);
      //   }
    }

    useEffect(()=>{
        // axios.get(url).then((response) => {
        //   console.log('is this Custom Hook Area ???');  
        //   console.log(response.data.movies);
        //   setData(response.data.movies);
        // });
      },[])

      return { data, signup };
}

export default PostAPIHooks;

