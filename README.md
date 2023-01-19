<h1 align="center">
  Online CV
</h1>
<div align="center">
  <img alt="Demo" src="https://i.imgur.com/hmhaUqP.gif" />
</div>
</br></br>
<p align="center">
  An <b>easy to setup</b> online cv/resume using a configurable <a href="https://github.com/alfredonuhe/online-cv/blob/gh-pages/static/json/config.json">JSON file</a> and GitHub Pages. For an example, see the <a href="https://alfredonuhe.github.io/online-cv/">demo</a>.
</p>
<p align="center">
  <a href="https://twitter.com/intent/tweet?text=An%20easy%20to%20set%20up%20personal%20website%20using%20a%20JSON%20configuration%20file:%20&url=https://github.com/alfredonuhe/online-cv" target="_blank">
    <img src="https://img.shields.io/twitter/url/https/shields.io.svg?style=social" alt="Tweet" />
  </a>
  <a href="" target="_blank">
    <img src="https://img.shields.io/github/languages/top/alfredonuhe/online-cv.svg?style=popout-square" alt="GitHub top language" />
  </a>
  <a href="" target="_blank">
    <img src="https://img.shields.io/github/release/alfredonuhe/online-cv.svg?style=popout-square" alt="GitHub release" />
  </a>
  <a href="" target="_blank">
    <img src="https://img.shields.io/github/license/alfredonuhe/online-cv.svg?style=popout-square" alt="GitHub license" />
  </a>
  <a href="" target="_blank">
    <img src="https://img.shields.io/github/last-commit/alfredonuhe/online-cv.svg?style=popout-square" alt="GitHub last commit" />
  </a>
</p>
</br></br>

## Usage

:warning: **WARNING: I am sharing this project with you for your own use, but with the condition you maintain the copyright notice visible at the footer of the website.**

## Installation

It is **very easy** to setup your own online cv without coding:

* Fork repository and name it.
* Go to Settings and setup GitHub Pages to work using the gh-pages branch. For more information follow the [official documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
* Populate the [JSON configuration file](https://github.com/alfredonuhe/online-cv/blob/gh-pages/static/json/config.json) with your own text and images. In the configuration file, for the key "repositoryName", add your repository name only if you aren't using your own username. In case of using your own username, leave it as an empty string.
* That's it! Enjoy!

## Additional notes

The webapp allows two kind of pages. The home page of the cv, and detail pages. Detail pages are used to give additional details about previous projects you have worked on.

Every page has a presentation section, a navigation bar, a set of sections, and a footer. The type, order, and content of the sections are configurable. If the order of section changes, it automatically updates the navigation bar items' order. The presentation section is also configurable by changing the title and backgound image.

The Elon Musk demo is a good example, because it showcases all the configurable elements of the online cv.
