//handles post to api for all new comments 
const commentFormHandler = async (event) => {
    event.preventDefault(); 

    const comment = document.querySelector('#comment').value.trim(); 
    const user = document.querySelector('#username').value.trim(); 

    if (comment && user) {
        const response = await fetch(`api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, user }), //convert to json data? 
            headers: {
              'Content-Type': 'application/json', //letting the API know that we are sending it json data
            },
        }); 
        if (response.ok) {
            document.location.replace('/comment');
          } else {
            alert('Failed to create comment');
          }
    }
}