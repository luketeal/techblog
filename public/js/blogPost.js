const blogPostFormHandler = async (event) => {
    event.preventDefault();
    console.log('you clicked submit')
    const title = document.querySelector('#postTitle').value.trim();
    const content = document.querySelector('#postContent').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/blogPost/`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
    .querySelector('#submitPost')
    .addEventListener('click', blogPostFormHandler);