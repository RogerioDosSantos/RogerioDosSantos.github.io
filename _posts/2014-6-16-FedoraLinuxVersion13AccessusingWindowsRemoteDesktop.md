---
layout: post
type: "blog"
subject: "Fedora Linux"
title: "Access Fedora Linux (Version 13) using Windows Remote Desktop"
category: "development"
image: "post_knowledge.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Install the Remote Desktop on Fedora Linux (Version 13)

- Open the Terminal (Applications >> System Tools >> Terminal)

{% include image.html path="Linux/terminal.png" %}

- Become a super user (su -)

{% include image.html path="Linux/super_user.png" %}

- Install XRDP (yum install tigervnc-server xrdp)

- Start XRDP Server (/etc/init.d/xrdp start)

- Get your IP Address (ifconfig)

Now connect with the Remote Desktop and use User: wruser and Password: [nothing]

{% include image.html path="Windows/remote_desktop_connection.png" %}
{% include image.html path="Linux/remote_login.png" %}
{% include image.html path="Linux/remote_desktop_example.png" %}




