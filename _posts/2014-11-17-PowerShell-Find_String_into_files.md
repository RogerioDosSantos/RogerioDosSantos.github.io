---
layout: post
type: blog
subject: "PowerShell - Find String into files"
title: "Windows PowerShell"
category: "development"
image: "post_tools.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

To find string into several files, you can use the Windows Powershell and the Get-ChildItem (Dir) command-let as following:

    dir <<v>base_directory> -I <<v>file_extensions[]> -R | Select-String <<v>strings_to_search[]>

E.g.:
 
    dir dir c:\fso -I *.txt, *.log -R | Select-String fail, success, pending
     
This command looks for the string "success" and "pending" into all sub directory of the folder "c:\fso" 
