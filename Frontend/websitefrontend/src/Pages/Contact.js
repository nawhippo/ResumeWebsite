import React from 'react';
import axios from 'axios';


function Contact() {
 const [Contact, setContact] = useState([]);
 const [loading, setLoading] = useState(true);

   useEffect(() => {
     //define the URL for your API endpoint
     const Url = 'https://api.example.com/Contact';

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
      {/* Your component content goes here */}
    </div>
  );
}

export default MyComponent;