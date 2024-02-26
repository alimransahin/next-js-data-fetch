const Post = async(param) => {
    const post=await.fetch(``)
  return (
    <div
      key={post.id}
      className="card w-[70%] mx-auto my-5 bg-primary text-primary-content"
    >
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <p>Likes:{post.likes_count}</p>
        <div className="card-actions justify-end">
          <Link href={`/post/${post.id}`}>
            <button className="btn">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
