const { readJSON, writeJSON } = require('../utils.js');
const posts = readJSON('postsDB')

module.exports = {
    index: (req, res) => {
        res.format({
            html: () => {
                let html = `<main>
                                <a href="/">Back Home</a>`;
                posts.forEach(({ title, content, img, tags }) => {
                    html += `<article>
                                <img src="${img}" alt="">
                                <h1>${title}</h1>
                                <ul style="display: flex; list-style: none outside none; margin: 0; padding: 0; text-decoration: underline;">`;
                    tags.forEach(tag => { html += `<li style="padding-right: 7px;">${tag}</h5>` });
                    html += `   </ul>
                                <p>${content}</p>
                            </article>`
                });

                res.send(html);
            },
            json: () => {
                res.json({
                    data: posts,
                    count: posts.length
                })
            }
        })
    }
}