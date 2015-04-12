---
layout: post
type: blog
subject: "Google Test"
title: "Link Problem on GTest projects migrated from Visual Studio Tests"
category: "development"
image: "post_development.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Google Test Framework (GTest) requires your project to be an executable. When using Visual Studio, it is common for you to create a flavor of project from the Visual Studio Test framework. In this way you might have your units tests available on both frameworks.

To do it you create the new flavor and them change the project properties to be an executable and properly link with the GTest libraries. Them when you compile your new project flavor you receive the following link error:

Error: _winmain@16 executable link error

This error happens when you are linking an executable without an entry point. To correct the issue you can do the following:

Change Properties -> Linker -> System -> SubSystem

from Windows (/SUBSYSTEM:WINDOWS) to Console (/SUBSYSTEM:CONSOLE)
                    