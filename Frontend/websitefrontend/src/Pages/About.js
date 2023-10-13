import React from 'react';
import axios from 'axios';


function About() {
 const [About, setAbout] = useState([]);
 const [loading, setLoading] = useState(true);

   useEffect(() => {
     //define the URL for your API endpoint
     const Url = 'https://api.example.com/About';

     //make an HTTP GET request using Axios
     axios.get(Url)
       .then(response => {
         setData(response.data);
         setLoading(false);
       })
       .catch(error => {
         console.error('Error fetching data:', error);
         setLoading(false);
       });
   }, []);


  return (

    <div>
      <h1>"About Me"</h1>
      <p>"Welcome to My Website. I am an aspiring software engineer slated to graduate in December"</p>
    </div>
  );
}

export default MyComponent;