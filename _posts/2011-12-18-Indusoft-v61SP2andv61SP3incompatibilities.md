---
layout: post
type: "blog"
subject: "Indusoft"
title: "Indusoft v6.1+SP2 and v6.1+SP3 incompatibilities"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

As a marketing strategy Indusoft guarantees forward compatibilities, in this way an application built in an older version of the Indusoft web Studio Product can be opened in a newer development version of the Indusoft Web Studio and be automatically upgraded. This article describe some incompatibilities between the Indusoft Web Studio v6.1 + SP2 and the Indusoft Web Studio v6.1 + SP3 that requires such upgrade as well a clean up of the binaries files in order you do not have problems:

### VBScript

When saving a VB Script interface (Global Script, Graphic Script or Script Task), IWS saves two files for each interface:

- *.IS: Text file with the script. This file is used on the development environment to edit the script.
- *.ISC: Binary file with the compiled script. This file is used by the runtime to execute the scripts.

IWSv6.1+SP3 (or higher) is unable to execute *.ISC - scripts compiled with IWSv6.1 (or older). Therefore, after upgrading IWSv.61+SP2 (or older) to IWSv6.1+SP3 (or newer), you MUST execute the "Tools >> Verify Application" command to recompile the script files (*.ISC) with the new format supported by IWSv6.1+SP3 (or newer). Otherwise, the scripts will not be executed by IWSv6.1+SP3.

### Alarm History

In previous versions of the product, the Alarm/Event History could be saved in different formats. Options different from 'Proprietary' or 'Database' are no longer supported by the product. Therefore, after upgrading IWSv.61+SP2 (or older) to IWSv6.1+SP3 (or newer), you MUST execute the "Tools >> Verify Application" command to convert the Alarm/Event history files (if any) saved in the format no longer supported by the product to the new 'Binary' format, which is supported by IWSv6.1+SP3 (or newer). Otherwise, the Alarm/Event History data will not be retrieved by IWSv6.1+SP3 (or newer). Notice that this conversion does not apply to Alarm/Event History saved either in the Proprietary or in the Database format.

### Screen Binary Files for the Web Solution

When saving the screens as HTML, Studio saves the binary file of each screen in the /Web sub-folder of the application with the SCC extension. These files are no longer supported by the ISSymbol control from IWSv6.1+SP3. Therefore, after upgrading IWSv6.1+SP2 (or older) to IWSv6.1+SP3 (or newer), you MUST execute the "Tools >> Verify Application" command to recompile the web screen files (*.SCC) with the new format supported by IWSv6.1+SP3 (or newer). Otherwise, the screens will not be supported by the new ISSymbol control from IWSv6.1+SP3.

### TCP/IP Server protocol

The TCP/IP Server, TCP/IP Client and ISSymbol modules from IWSv6.1+SP3 (or newer) are unable to exchange data, via TCP/IP with applications created with IWSv6.1+SP2 (or older) if specific communication settings configured in these applications are different from the default settings (Project Settings >> Communication). Therefore, after upgrading IWSv6.1+SP2 (or older) to IWSv6.1+SP3 (or newer), you MUST execute the "Tools >> Verify Application" command to update the communication settings in the [applicationname].APP  with the options supported by IWSv6.1+SP3 (or newer). Otherwise, the remote stations may not be able to exchange data with the IWSv6.1+SP3 (TCP/IP Client or TCP/IP Server) or with the Web Thin Client control (ISSymbol).