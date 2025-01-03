async function fetchPosts() {
  try {
    const response = await fetch('/api/posts'); // Relative path
    const posts = await response.json();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = posts.map(post => `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </div>
    `).join('');
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();
