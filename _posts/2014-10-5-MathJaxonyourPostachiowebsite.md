---
layout: post
type: "blog"
subject: "MathJax"
title: "MathJax on your Postach.io website"
category: "development"
image: "post_blog.jpg"
resource_folder: "post"
published: true
---

You can use MathJax on your Postach.io website as the example below:

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
        src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

[mathjax url="http://cdn.mathjax.org/mathjax/2.1-latest/MathJax.js?config=AM_HTMLorMML-full"][/mathjax]

When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and they are:

`x = (-b +- sqrt(b^2-4ac))/(2a)`

Another example:

When `x < y` or `x > y` or `x^2 or a_(m n) or a_{m n} or (x+1)/y or sqrtx` we will have the following result:

`y = alpha + (delta / (Delta*gamma)) +  int(grad lambda) - ((dely) / (delt))`

The examples above has the following code:

{% gist RogerioDosSantos/a72df3ae3be00c1a0fa1 %}

