// Updates the post so long as the user is the same who created it.
const updateButtonHandler = async (event) => {
  event.preventDefault();
  console.log('Event listener works');

  const name = document.querySelector('#title').value.trim();
  const description = document.querySelector('#content').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setTimeout(() => {
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }, 1000);
  }
};

// Deletes the post so long as the user is the same who created it.
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('#delete-post')
  .addEventListener('click', delButtonHandler);

document
.querySelector('#update-post')
.addEventListener('click', updateButtonHandler);
