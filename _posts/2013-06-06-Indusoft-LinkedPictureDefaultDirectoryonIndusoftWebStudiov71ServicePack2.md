---
layout: post
type: "blog"
subject: "Indusoft"
title: "Linked Picture Default Directory on Indusoft Web Studio v7.1 + Service Pack 2"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Indusoft - Linked Picture Default Directory

On the Indusoft Web Studio v7.1 + Service Pack 2 we changed the default path of linked pictures to be relative to the Web folder. On older versions, this path were relative to the application folder. In case you created an application on older versions, your relative linked pictures might not load properly.

To correct this problem you can enter the following entry on you application file (.App):

    [Options]
    UseAppPathForLinkedPictures=1
