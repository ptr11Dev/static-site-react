import React, { Component } from "react";

function importAll(arg) {
  let backgrounds = {};
  arg.keys().forEach(bg => {
    backgrounds[bg.replace("./", "")] = arg(bg);
  });
  return backgrounds;
}

const backgrounds = importAll(require.context("../img/", false, /\.jpg$/));

// I'm adding this variable to have possibility to change shadow on all articles at once there is - code to copy and add to article's background
// bgc: `${shadowOnBackgrounds} ,url(${backgrounds["filename.jpg"]})`

const shadowOnBackgrounds = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))";

const myArticles = [
  {
    id: 1,
    postDateTime: "2020-02-10",
    postDate: "10th February, 2020",
    title: "5th generation is coming",
    content:
      "PS5 and Xbox Series X are set to arrive later this year, heralding the next generation of the console gaming life cycle.",
    bgc: `${shadowOnBackgrounds} ,url(${backgrounds["console.jpg"]})`
  },
  {
    id: 2,
    postDateTime: "2020-01-16",
    postDate: "16th January, 2020",
    title: "Cyberpunk 2077 release delayed",
    content:
      "CD Projekt Red announced on Twitter that the highly anticipated game, which was set to drop on April 16, 2020, but has now been pushed back five months to September 17, 2020.",
    bgc: `${shadowOnBackgrounds} ,url(${backgrounds["cyberpunk.jpg"]})`
  },
  {
    id: 3,
    postDateTime: "2019-12-28",
    postDate: "28th December, 2019",
    title: "Winds of Winter release date",
    content:
      "THE WINDS OF WINTER release date could be in 2020 for George RR Martin, according to a Game of Thrones and A Song of Ice and Fire expert's sources.",
    bgc: `${shadowOnBackgrounds} ,url(${backgrounds["book.jpg"]})`
  }
];

class News extends Component {
  state = {};
  render() {
    return (
      <section className="news">
        {myArticles.map(article => (
          <article
            className="post"
            key={article.id}
            style={{ backgroundImage: article.bgc }}
          >
            <time className="post__date" dateTime={article.postDateTime}>
              {article.postDate}
            </time>
            <h3 className="post__title">{article.title}</h3>
            <p className="post__content">{article.content}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default News;
