---
layout: post
type: "blog"
subject: "MFC"
title: "Frame vs View"
category: "development"
image: "post_cpp.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

The image below shows the difference between a Frame and View windows when using a MFC Frame/View architecture.

{% include image.html path="MFC/frame_vs_view.png" %}


On the MFC Frame/View architecture, each document can be linked with one or more View. The View is nothing more that a representation of the document.

You can have the same document presented in several different formats by using one View for each format presentation.

A View will always be inside a Frame and a Frame can have more the one View.

{% include image.html path="MFC/view_detail.png" %}

                    