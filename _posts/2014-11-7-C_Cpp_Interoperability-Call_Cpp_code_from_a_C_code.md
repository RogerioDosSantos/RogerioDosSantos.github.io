---
layout: post
type: blog
subject: "C/C++ Interoperability"
title: "Call C++ code from a C code"
category: "development"
image: "post_cpp.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Introduction
============

Several times you are required to call an C++ code from a C code. One example where you want to have such interoperability is when you use an operational system, as for example VxWorks realtime program, where the program executions requires an entry-point in C code. On this article it is proposed a 3 step procedure that will allow you to execute such interoperability.

Step 1 - Create an Interoperability Header (CodeInteroperability.h)

This header will contain your entry point class and 3 additional global functions to Create, Run and Destroy your entry point class.

<script src="http://gist-it.appspot.com/https://github.com/RogerioDosSantos/Samples/blob/master/C/C_Cpp_Interoperability/CodeInteroperability.h?footer=0">
</script>

Step 2 - Codify your entry point class and the 3 global functions using C++ (CodeInteroperability.cpp)

<script src="http://gist-it.appspot.com/https://github.com/RogerioDosSantos/Samples/blob/master/C/C_Cpp_Interoperability/CodeInteroperability.cpp?footer=0">
</script>

Step 3 - Use the 3 global functions on the C program (CEntryPoint.c)

<script src="http://gist-it.appspot.com/https://github.com/RogerioDosSantos/Samples/blob/master/C/C_Cpp_Interoperability/CEntryPoint.c?footer=0">
</script>


                    