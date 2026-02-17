
export default function MISCOptimization() {
    return (
        <BlogPost post={{ title: "My awesome blog post", keywords: "test1, test2" }} />
    )
}

function BlogPost({ post }: { post: { title: string, keywords: string } }) {
    return (
        <article>
            <h1>{post.title}</h1>
            {/* Support All Metadata */}
            <title>{post.title}</title>
            <meta name="author" content="Josh" />
            <link rel="author" href="https://twitter.com/joshcstory/" />
            <meta name="keywords" content={post.keywords} />
            <p>
                Eee equals em-see-squared...
            </p>
        </article>
    );
}