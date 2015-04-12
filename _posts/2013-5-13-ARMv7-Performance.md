---
layout: post
type: blog
subject: "Windows CE"
title: "ARMv7 - Performance"
published: true
category: "development"
image: "post_performance.jpg"
author: "Rogerio dos Santos"
resource_folder: "post"
---

This article informs steps that can be used during the creation of your device SDK using the Platform Builder, as well steps to be used during the compilation of your program that will speed up the overall performance of your application on ARMv7 processors.

### Introduction

Newer processor types usually introduces techniques to improve the performance, reduce the power consumption, etc. however, those functionalities might need the introduction of specifics processor commands not available on older processors architectures that is neither always used by the compilers nor properly enabled on the SDKs. 

This is the case when using Microsoft Visual Studio 2008 to compile programs targeting ARMv7 processors. Both the Platform Builder and the Visual Studio use by default the ARMv4i processor configuration since it will be compatible with the ARMv7. However, ARMv7 processor architecture have introduced new internal instructions that allow better processing of floating points. 
Because floating points are largely used on applications, mainly on graphical rendering, the usage of the full instructions capabilities available on ARMv7 processor might increase the overall performance of your solution.

In other hand, when following the procedure described on this article, your application will no longer be able to run on previous ARMs platforms, therefore you will need to provide the old compilation version of the ARM processor (E.g.: ARMv4, ARMv4i, ARMv5, etc...) in case you still need to support those processor types. 

### Creating your real ARMv7 SDK

1- Using the Platform Builder for the Windows Embedded Compact 7 create your ARMv7 SDK project and make sure to include the BSP Template: ARMv7.

2 - Compile your SDK project.

3 - Open with the notepad the following file:

    <Your SDK project directory>\SDKs\<Your SDK Name>\obj\Build<Your SDK Name>.xml

E.g.: c:\WINCE700\OSDesigns\ARMv7SDK\ARMv7SDK\SDKs\SDK1\obj\BuildSDK1.xml

4 - Find and rename the entries that have the string ARMV4i for ARMV7. 

Example of properties to be renamed:

    <Property NAME="CpuName">ARMV7</Property>
    <Property NAME="IdeFamily">ARMv7</Property>

5 - Open the Visual Studio 2008 Command prompt by going into "Build >> Open Release Directory in Build Window" menu.

6 - Go to the following directory on the Visual Studio 2008 Command prompt:

    <Your SDK project directory>\SDKs\<Your SDK Name>\

E.g.: c:\WINCE700\OSDesigns\ARMv7SDK\ARMv7SDK\SDKs\SDK1\

7 - Execute the following command:

    Gensdk obj\Build<Your SDK name>.xml

E.g: Gensdk obj\BuildSDK1.xml

Result: Your SDK will be created using the configuration that you modified.

### Using your real ARMv7 SDK

1 - Install your SDK on the computer that your product will be compiled.

2 - Open the your project on the Visual Studio 2008 and introduce the new platform installed using the  "Configuration Manager" by creating a new platform based on the "ARMv4i" and  using your new "ARMv7" SDK.

3 - Change the Macro ARMV4I to ARMV7 (Project Properties >> C/C++ >> Preprocessor >> Preprocessor Definitions)

4 - Point the Visual Studio to build using the compiler files. CL.exe

The standard C++ compiler of the Visual Studio 2008 (CL.EXE version:15.00.20720) does not support the ARMV7 advanced commands, therefore you will need to point the Visual Studio 2008 to use a newer C++ compiler version (CL.EXE version:15.01.50304.03) available on the Windows Embedded Compact 7 platform builder as follow:

4A - If you do not have the Windows Embedded Compact 7 platform builder installed in your computer, copy the following folder from a computer that have the Windows Embedded Compact 7 platform builder installed:

    <Windows Embedded Compact 7 installation directory>\sdk\bin\i386\arm

E.g.: C:\WINCE700\sdk\bin\i386\arm

4B - On the Visual Studio 2008 add the path where the new C++ compiler is (Tools >> Options >> Projects and Solutions >> Select the ARMv7 platform >> Add folder icon)

E.g.: C:\Program Files (x86)\Windows CE Tools\SDKs\Armv7 Compiler Files

Important: It is very important that you select the ARMv7 platform and add the new C++ compiler only for this platform, otherwise you might have problems with the previous compilation.

5 - Add the following additional commands for your compilation options (Project Properties >> C/C++ >> Command Line >> Additional Options)

/QRarch7 /arch:VFPv3-D32 /QRfpe-

QRarch7 :      Enable the ARMv7 support from the compiler
arch:VFPv3-D32 : Enable to use the latest floating point instruction set by ARM (CortexA8 CPUs)
QRfpe- : Disable floating point emulation (ARMv7 CPUs have internal functions for floating points)

{% include image.html path="VisualStudio/1.png" %}

Note: In case your the Visual Studio 2008 is not pointing for the correct C++ compiler, the command above will not be recognized and therefore ignored during the build process. A warning will be displayed informing that. So, you can use this warning to be sure that all the previous configuration is correct.

6 - Build the solution using the new platform.

Important Note: If you never compiled a Windows Compact Embedded 7 using the Visual Studio 2008 you might need to install the ATL Update for Windows Compact Embedded 7. You can find the procedure to execute this installation [here](/post/visual-studio-2008-and-windows-compact-embedded-7-atl-update "Visual Studio 2008 and Windows Compact Embedded 7 - ATL Update")

### Experience using the new compiler

I was able to observe a significant increase of performance (around 10%) on drawing operations that requires intensive use of floating pointers.


