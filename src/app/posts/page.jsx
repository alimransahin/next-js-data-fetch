const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts[0]);

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl text-indigo-600">
        Total Posts: {posts[0].length}
      </h1>
      {posts[0].map((post) => (
        <div
          key={post.id}
          className="card w-[70%] mx-auto my-5 bg-primary text-primary-content"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes:{post.likes_count}</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
