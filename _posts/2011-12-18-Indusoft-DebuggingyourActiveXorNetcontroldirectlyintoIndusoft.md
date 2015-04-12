---
layout: post
type: "blog"
subject: "Indusoft"
title: "Debugging your ActiveX or .Net control directly into Indusoft"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

When you are creating your own ActiveX or .Net control to use with the Indusoft Web Studio you can save a lot of time when debugging it directly inside Indusoft. This article shows how you can you configure your Visual Studio and an Indusoft application to debug your control using the either the Studio Manager and the Viewer as container.


### Visual Studio Configuration

On the Visual Studio you can set the execution of any program to be called when you stat the debug of your project by executing the following steps:

 - Right click on your project ]] Properties ]] Configuration Properties ]] Debugging

 - On the Command, enter the full path of the executable desired.

 - On the Command arguments you can inform any additional argument that should be passed to the executable.

The Studio Manager and Viewer programs uses unmanaged code, therefore if your ActiveX or .Net control uses managed code sometimes the Visual Studio will not be allow you to set breakpoint in your solution. This happens because by default the debugger type is set to automatically detect if it should support unmanaged or managed code based on the executable being called. If the Visual Studio is not able to automatically detect that an unmanaged code calling a managed code, it will only set the debug mode to debug unmanaged code.

You can force the debug mode the Visual Studio is using by doing the following steps:

 - Right click on your project ]] Properties ]] Configuration Properties ]] Debugging

 - On the Debugger Type, select the debug mode desired. (E.g.: Unmanaged Only).


### Studio Manager

When you are developing an Indusoft Web Studio application, you are basically using the "Studio Manager.exe" program that is located on the {Indusoft installation directory}.

You might want to set this program as your executable container if you are having problems to load or configure your control into Indusoft Web Studio program.


### Viewer

The program "Viewer.exe" is located at the {Indusoft installation directory}. This program is the container of your control when you are running your application (Executing the Indusoft Web Studio Runtime).

If you want to execute the Viewer as it is in local mode, you can use the following command:

     "[Viewer Directory]\Viewer.exe" /nosplash /noprogressbar /ds1:localhost /dsp:1234 /url:"file://[Application Directory]\[Application Name].APP"

Or the code below for the CE Emulation

     "[Viewer Directory]\Viewer.exe" /nosplash /ceemul /noprogressbar /ds1:localhost /dsp:1234 /url:"file://[Application Directory]\[Application Name].APP"

Please note the TCPServer should be running prior the command above to be executed, otherwise you will get an error message.

You can also execute the Viewer with the VBScript debug mode enabled by adding the following argument on the previous commands:

     /debug

When the Viewer is executed with the VBScript debug mode enabled, it will always show the CE Emulation window.

Executing the Viewer with the VBScript debug mode enabled gives you that flexibility to also set breakpoints on the Indusoft VBScript commands. This might be very useful if you are evaluating specific commands that your ActiveX or .Net control exports.

You might want to set the Viewer program as your executable container if you are having problems when executing your control when running an Indusoft Web Studio application.


### Steps Sumary to debug your ActiveX or .Net directly from the Studio Manager

 - Set the Studio Manager to be executed when your debug session starts

 - Run your project in debug mode.

 - Create an application and into a screen add the your control into a screen

 - Access the configuration properties and windows desired.

Be aware that your control will be first loaded when added into a screen or if a screen where your control is saved is opened. Once loaded, the Studio Manager process will only release your control when the Studio Manager process is finished.


### Steps Sumary to debug your ActiveX or .Net directly from the Viewer

 - Using the Indusoft Web Studio create an application that uses your .Net or ActiveX

 - Set the Viewer to not be executed automatically when you start the runtime.

 - Configure the Visual Studio to call the Viewer when your debug session starts

 - Execute the Indusoft runtime.

 - Run your project in debug mode.

Be aware that your control will be first loaded a screen where your control is saved is opened. Once loaded, the Viewer process will only release your control when the screen is closed.


