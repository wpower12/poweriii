---
title: "Websites and Blogs and Cats Oh My!"
date: "9/27/19"
_layout: "page"
---

Hi.  

My name is Bill.  I'm a grad student pursuing a PhD in CS on an AI and ML track.  That means I get to read a bunch, and occasionally make some cool models of interesting data.  

I wanted to keep track of the things I've read and made while working towards my degree, and this blog (hopefully) will fill that role.  

In this first post I thought I'd just talk about the design of this website, and some of the past (not AI/ML) projects I've hosted on it.  

### This site

Fist up, this site.  The source code can be found <a href="">here</a>.  Feel free to clone and play with it.  

The site itself is hosted on a VPS with apache running.  Some of the background scripts (serving files) are handled in PHP, but the basically all of the content is static.  There is an .htaccess file that implements some simple quality of life features like URL redirects.  

The index, blog, and project pages make heavy use of javascript, so some organization was required.  I used npm locally to leverage the commnuities build tools.  Webpack is used to build the complex apps out of their consitiuent files.  Each app has a specific webpack recipie that targets a 'main' script, and outputs a bundle that is used by the projects specific page.  Additionally, cleancss is used to minify the css files for each portion of the site.  

The index and blog pages are built around the jquery.terminal library.  This is a great terminal emulator that turns a div into an interactive terminal prompt.  The library exposes a very simple API for adding your own commands, and tweaking the look and feel of the terminal and its prompt.  

To mimic a directory/filesystem, a global javascript object is maintained.  Each top level entry indicates a possible directory.  In these are other entries that represent either 'files' (really just links to javascript applications that are 'executed') or directories (really just references to other top level entries).  This allows for a rough, but nestable fake filesystem.  The script also tracks a current and previous directory to manage changing directories.  

The blog is implemented with a barebones static site generator.  Posts are written in markdown, then the onessg tool is used to create an html file via a template.  The post page is also a jquery.terminal and tracks a list of posts in a javascript object.  Right now this is manually added to, but I'd like to eventually automate that.  This object is used by terminal methods to generate the post listing, and to also provide the address to each post for the read command.  

### The Apps

#### Forces 
My first thing!  


