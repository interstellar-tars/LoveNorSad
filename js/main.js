async function fetchPosts() {
  try {
    const response = await fetch('https://lovenorsad.cubiodojo.workers.dev/api/posts'); // Full Worker URL
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
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
