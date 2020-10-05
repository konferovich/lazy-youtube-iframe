# lazy-youtube-iframe

<b>lazy-youtube.js</b> script for lazy loading iframe video from <b>Youtube</b>.

What is it for? To unload requests, which in turn will affect the site loading speed.

Simply put for <b>SEO</b>.

<br>

How it works?

<br>
<br>

Youtube offers to insert links in this form, for example:
```
<iframe width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
<br>
<br>
<br>
<br>

By connecting the script, for example:
```
<script type="text/javascript" src="/lazy-youtube.js"></script>
```

Now you can replace iframe with <b>youtube</b> tag, like this:
```
<youtube width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></youtube>
```
