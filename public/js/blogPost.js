let postButtons = document.querySelectorAll('.updateButton')
let deleteButtons = document.querySelectorAll('.deleteButton')
console.log(postButtons)

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

const blogUpdateFormHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id')
  console.log(`you clicked submit on the update form id ${id}`)
  const title = document.querySelector(`#postTitle${id}`).value.trim();
  const content = document.querySelector(`#postContent${id}`).value.trim();

  if (title && content && id) {
    const response = await fetch(`/api/blogPost/`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const blogDeleteHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id')
  console.log(`you are going to delete post ${id}`)
  
    const response = await fetch(`/api/blogPost/`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  
};
  
document
  .querySelector('#submitPost')
  .addEventListener('click', blogPostFormHandler);

for(each of postButtons) {
  each.addEventListener('click', blogUpdateFormHandler);
}

for(each of deleteButtons) {
  each.addEventListener('click', blogDeleteHandler);
}

