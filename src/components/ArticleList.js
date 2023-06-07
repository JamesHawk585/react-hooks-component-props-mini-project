import React from 'react';

function ArticleList({ posts }) {
    const articleList = posts.map((post) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <small>{post.date}</small>
                <p>{post.preview}</p>
            </article>
        )
    })
    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList;