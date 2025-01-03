document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = prompt("Enter admin password:");
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  try {
    const response = await fetch('https://lovenorsad.cubiodojo.workers.dev/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, password })
    });

    if (response.ok) {
      alert('Post created successfully!');
    } else {
      alert('Failed to create post.');
    }
  } catch (error) {
    console.error('Error submitting post:', error);
    alert('An error occurred.');
  }
});
