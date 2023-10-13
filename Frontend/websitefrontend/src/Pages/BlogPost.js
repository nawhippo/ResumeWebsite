import React from 'react';
import axios from 'axios';


function BlogPosts() {
 const [Contact, setContact] = useState([]);
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState([]);

   useEffect(() => {
     //define the URL for your API endpoint
     const Url = 'https://api.example.com/BlogPosts';

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

     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value,
       });
     };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
  };





    const ClickSubmitForm = (title, description, image) => {
    const Url = 'https://api.example.com/addBlogPost';

    axios.post('/', {
    title: title,
    description: description,
    image: image
    })
    .then(function (response){
        console.log(response)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
          });
      }, []);
}
   return (
         <form onSubmit={ClickSubmitForm}>
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <input
                  type="description"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="image">Image:</label>
                <textarea
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
    )

export default MyComponent;