---
layout: post
type: blog
subject: "VxWorks"
title: "VxWorks RTP project link when using file system functions"
category: "development"
image: "post_bug.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

The VxWorks version 7.0 is not compiling when a program uses files system functions as mkdir, rmdir, etc. This is caused by bug on this version of VxWorks and affects all the file system functions that uses the usrFsLib library. This is a bug reported on the following link: https://knowledge.windriver.com/en-us/000_Products/000/020/000/080/000/000_V7STO-226_%3A_mkdir()_no_more_available_in_RTP_libc 

{% include image.html path="VxWorks/lfsapiusr_declaration.png" %}

To solve the problem you do not need to change the makefile as suggested by the proposed solution link. Just add the library on your project (Build Properties >> Libraries >> Add fsapiUsr library):

