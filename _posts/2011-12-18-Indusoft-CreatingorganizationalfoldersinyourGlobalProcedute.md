---
layout: post
type: "blog"
subject: "Indusoft"
title: "Creating organizational folders in your Global Procedute"
category: "development"
image: "post_development.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Indusoft allows you to create organizational folder inside your VBScript Global Procedure files by adding a simple command syntax in your script that will be interpreted by the script engine as comment however Indusoft will parse it and create folders inside the global procedure tree.

Syntax:

      //$region:{your organizational folder name}

      E.g.:
      //$region:Machine Control 01
      //$region:Machine Control 02

This syntax create on the Main Procedure will provide you the following result:

{% include image.html path="Indusoft/global_procedure_folders.png" %}
