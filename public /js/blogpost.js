const newBlogPost = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#title').value.trim();
    const user = document.querySelector('#username').value.trim(); 
    const description = document.querySelector('#blog-description').value.trim(); 
    const date = document.querySelector('#date-created').value.trim(); 
    const content = document.querySelector('.content').value.trim(); 
   

    if (title && user && description && date && content) {
    const response = await fetch(`api/blog`, {
        method: 'POST',
        body: JSON.stringify({ title, user, description, date, content }), //convert to json data
        headers: {
          'Content-Type': 'application/json', //letting the API know that we are sending it json data
        },
    }); 
    if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to create post');
      }
    }
}; 


document
.querySelector('.new-blog') //should this be the home button though? ACCOUNT FOR IN VIEWS
.addEventListener('click', newBlogPost); //ACCOUNT FOR IN VIEWS 