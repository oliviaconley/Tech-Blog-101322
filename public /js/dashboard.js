//needs to show all existing blog posts with title, author and description 
const dashboard = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-description').value.trim();
    const user = document.querySelector('#username').value.trim(); 
    const date = document.querySelector('#date-created').value.trim(); 
   

    if (title && description && user && date) {
        const response = await fetch(`/api/blog`, { //so if all of the criteria are met then post to the server?
          method: 'POST',
          body: JSON.stringify({ title, description, user, date }), //convert to json data
          headers: {
            'Content-Type': 'application/json', //letting the API know that we are sending it json data
          },
        });
        if (response.ok) {
            document.location.replace('/blog');
          } else {
            alert('Failed to load blog posts');
          }
    } 
};

document
.querySelector('.blog-list') //should this be the home button though? ACCOUNT FOR IN VIEWS
.addEventListener('click', dashboard); //ACCOUNT FOR IN VIEWS 
