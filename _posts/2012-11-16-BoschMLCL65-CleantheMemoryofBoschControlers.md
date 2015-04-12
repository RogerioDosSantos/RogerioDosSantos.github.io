---
layout: post
type: "blog"
subject: "Bosch MLC L65"
title: "Clean the Memory of Bosch Controlers"
category: "development"
image: "post_bug.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Depending of the error you might have with the Bosch MLC PLC family (More specifically the MLC65), you might need to clean the memory to recover from the error.

For example, if you try to upgrade the PLC firmware and after updating it you get a system error (More specifically SYS-ERR: F92240005 error), the only way you can recover from theis error will be to execute the procedure below to clean the memory:

      1 - Cycle power to the MLC.

      2 - Keep ESC and ENTER button pressed during boot-up until display will say BOOTSTOP.

      3 - Press briefly UP and DOWN buttons together.

      4 - The MLC will go through CLEANUP and REBOOT.


