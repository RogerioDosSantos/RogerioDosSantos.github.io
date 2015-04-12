---
layout: post
type: "blog"
subject: "STL"
title: "Debuging STL Vector on Visual Studio"
category: "development"
image: "post_cpp.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

You cannot access directly STL vector index on Visual Studio, however, there is a way to access vector value in debug mode though a RawView:

     ((< vector_name >)._Myfirst)[< vector_index >]

E.g.: ((my_vector)._Myfirst)[10] - Access the index 10 of the vector my_vector