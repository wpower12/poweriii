---
title: "Websites and Blogs and Cats Oh My!"
date: "9/7/17"
_layout: "page"
---

Hi.  

My name is Bill.  I'm a grad student pursuing a PhD in CS on an AI and ML track.  That means I get to read a bunch, and occasionally make some cool models of interesting data.  

I wanted to keep track of the things I've read and made while working towards my degree, and this blog (hopefully) will fill that role.  

In this first post I thought I'd just talk about the design of this website, and some of the past (not AI/ML) projects I've hosted on it.  

## This site

First up, this site.  The source code can be found <a href="https://github.com/wpower12/poweriii">here</a>.  Feel free to clone and play with it.  

The site itself is hosted on a VPS with apache running.  Some of the background scripts (serving files) are handled in PHP, but the basically all of the content is static.  There is an .htaccess file that implements some simple quality of life features like URL redirects.  

The index, blog, and project pages make heavy use of javascript, so some organization was required.  I used npm locally to leverage the commnuities build tools.  Webpack is used to build the complex apps out of their consitiuent files.  Each app has a specific webpack recipie that targets a 'main' script, and outputs a bundle that is used by the projects specific page.  Additionally, cleancss is used to minify the css files for each portion of the site.  

The index and blog pages are built around the jquery.terminal library.  This is a great terminal emulator that turns a div into an interactive terminal prompt.  The library exposes a very simple API for adding your own commands, and tweaking the look and feel of the terminal and its prompt.  

To mimic a directory/filesystem, a global javascript object is maintained.  Each top level entry indicates a possible directory.  In these are other entries that represent either 'files' (really just links to javascript applications that are 'executed') or directories (really just references to other top level entries).  This allows for a rough, but nestable fake filesystem.  The script also tracks a current and previous directory to manage changing directories.  
q
The blog is implemented with a barebones static site generator.  Posts are written in markdown, then the onessg tool is used to create an html file via a template.  The post page is also a jquery.terminal and tracks a list of posts in a javascript object.  Right now this is manually added to, but I'd like to eventually automate that.  This object is used by terminal methods to generate the post listing, and to also provide the address to each post for the read command.  

## The Apps

If you `cd` to the projects directory, you'll see some of the javascript applications I've made.  These are all simple and usually are just a way to test out a single concept from myself or my studies.  To run any of them, just type in the name and hit enter.  here's a brief overview of `forces`, `traffic`, and `tribes`.

### Forces
<a href="/projects/forces.html">
	<img src="../img/ex_forces.gif" style="">
</a>

My first thing!  One of the earliest things I made in javascript.  I had been reading about space partitioning algorithms and datastructures and wanted an excuse to use a quad tree.  All the moving discs in the simulation are stored in a quad tree.  This lets me save a lot of comparisions when resolving collisions.  You can see stats by hitting the s (i think, go with what the page says) button.  The collisions are all conservation conserving with the radius of a disc standing in for its mass.  

The circle patterns are supposed to represent gravity wells.  These didn't turn out exactly as I envisioned.  The way they are drawn is hacky.  The original idea was to draw concentric circles, with a gradient of colors and decreasing radius.  I had hoped it would give an illusion of the space there deforming into a well.  What is there works well enough. 

As for the interaction between these wells and the discs: really bad approximation of gravity.  You can see the total energy in the system in the stats, you'll notice that this does not stay constant as discs interact with the wells.  This is partly due to a use of an inverse linear relationship in lieu of the actual inverse square.  Also, the discs only interact with one well at a time.  

### Traffic
<a href="/projects/traffic.html">
	<img src="../img/ex_traffic.gif" style="">
</a>

A grid based traffic simulator.  Cars exist on grids representing roads and intersections.  The cars are driven by three different class of driver.  This type effects which lane they prefer to stay in, and how and when they will pass other cars.  There are controls for adding roads and intersections, and connecting these up to build road networks.  

### Tribes
<a href="/projects/tribes.html">
	<img src="../img/ex_tribes.gif" style="">
</a>

Tribes is an agent simulation on a grid.  The grid serves as an environment for units that move along it.  Each unit starts with a random color and power value.  Each update tick the agents randomly move to an empty adjacent square, and then look for a fight.  A random adjacent square is selected, and if there is a unit there with a different color value, they compare their powers.  The unit with a lower value copies the color of the winner.  Also, if a unit is ever surrounded by units only of its same color, and its power is larger than all thsoe around it, that unit 'revolts' and set its color to its original value.  

These simple rules give rise to some cool behaviour.  These behaviour also depend on parameters of the simulation.  Controls on the page allow you to change the FPS, the size of the sim, and the fill percentage.  

## Cya!
I hope you enjoy looking at my stuff!  If you'd like to give me any tips, critques, or anything send me an email! `willpowe@gmail.com` You can also reach me through my accounts, you can find all of them on the main site.  Check out the help command to see everything available.  Since this is the internet, here's a picture of my cat as a kitten.

<img src="../img/mycat.png" style="">


