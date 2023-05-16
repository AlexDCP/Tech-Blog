const newCommentHandler = async (event) => {
    event.preventDefault();
    console.log('Event listener works');

    
    const description = document.querySelector('#comment').value.trim();

    if (description) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
        'Content-Type': 'application/json',
        },
    });
    setTimeout(() => {
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to post comment');
        }
    }, 1000);
    }
};

document.querySelector('#add-comment').addEventListener('click', newCommentHandler);