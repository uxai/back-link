# Back links for static websites

When we want a back button to take users to the previous page in our interface, what is the expected behaviour and how do we solve for history outside of our domain scope?

I created this simple script to better handle back links for static websites.

For more details on what I'm solving for check my blog post.
https://uxai.net/blog/building-functional-back-links-for-static-websites.html

## Installation
Simply download the script, and link to the file from your source code at the end of the page: 
```<script src="/js/back-button.min.js"></script>```


## Usage
Afterwards you can easily call the function, with onclick.

```
<a href="/" onclick="takemeback(0)" id="backlink">Back</a>
```

Pass a zero to the function if you want the backlink to always go to the homepage. Pass a one if you want the back link to go to the path root.

### For example

```
<a href="/" onclick="takemeback(0)" id="backlink">Back</a>
```

If the page URL I'm on is `https://www.uxai.net/blog/my-blog-post.html`, this will tell the script, if no history in the browser to go back to the home page `https://www.uxai.net`

```
<a href="/" onclick="takemeback(1)" id="backlink">Back</a>
```

If I pass a one, this will tell the script, if no history in the browser to go back to the first path, in this case `https://www.uxai.net/blog`