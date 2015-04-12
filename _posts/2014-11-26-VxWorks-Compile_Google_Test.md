---
layout: post
type: blog
subject: "VxWorks"
title: "Compile Google Test for VxWorks"
category: "development"
image: "post_development.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Introduction
---

On the time I wrote this article, VxWorks was not yet supported by Google test (Gtest). This article describe the procedure to port the Google test to be used on VxWorks RTP Projects.

Procedure
---

- Create a RTP project on VxWorks

- Set the Project to be a library (Build Properties >> Target >> Build tool = Librarian)

{% include image.html path="VxWorks/build_properties_librarian.png" %}

- Define the variable GTEST_ROOT variable to be the path where the Google test folder is (Build Properties >> Target >> Variable >> New):

{% include image.html path="VxWorks/variables_guest_root.png" %}

Note: The Google Test folder is the folder where is located the scr, include, script folders.

- Define the entries GTEST_HAS_POSIX_RE, GTEST_HAS_TR1_TUPLE and GTEST_HAS_STREAM_REDIRECTION to be 0 (Build Properties >> Defines >> Add):

{% include image.html path="VxWorks/defines_google_test.png" %}

- Add the GTEST_ROOT folder and GTEST_ROOT/Include folders as Include directories (Build Properties >> Paths >> Add):

{% include image.html path="VxWorks/path_google_test.png" %}

- Add the following source files into your project:

     GTEST_ROOT/gtest_main.cc
     GTEST_ROOT/gtest-all.cc

{% include image.html path="VxWorks/add_file_and_link.png" %} 

- That is all. Now you can compile your project:

{% include image.html path="VxWorks/gtest_compiled.png" %}




