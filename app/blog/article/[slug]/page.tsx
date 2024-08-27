// app/blog/article/[slug]/page.js

export async function generateStaticParams() {
     // Fetch your slugs here, for example, from an API or database
     const slugs = ['my-first-post', 'another-post'];

     return slugs.map((slug) => ({
          slug,
     }));
}

export default async function BlogPost({ params }) {
     const { slug } = params; // Access the slug directly from the params in the server component

     // Fetch data based on the slug (you can replace this with your actual data fetching)
     const post = await getPostData(slug);

     if (!post) {
          // Handle if the post is not found
          return <h1>Post Not Found</h1>;
     }

     return (
          <div>
               <h1>{post.title}</h1>
               <p>{post.content}</p>
          </div>
     );
}

// Example function to get post data (replace with your real data fetching logic)
async function getPostData(slug) {
     const data = [
          { slug: 'my-first-post', title: 'My First Post', content: 'This is the content of my first post.' },
          { slug: 'another-post', title: 'Another Post', content: 'This is the content of another post.' },
     ];

     return data.find((post) => post.slug === slug);
}