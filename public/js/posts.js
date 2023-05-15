const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('Event listener works');

  const name = document.querySelector('#title').value.trim();
  const description = document.querySelector('#content').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setTimeout(() => {
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }, 1000);
  }
};

document.querySelector('#new-post').addEventListener('click', newFormHandler);
