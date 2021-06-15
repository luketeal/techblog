const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#addComment').value.trim();
    const id = event.target.getAttribute('data-id')
  
    if (comment) {
      const response = await fetch(`/api/blogPost/${id}`, {
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);