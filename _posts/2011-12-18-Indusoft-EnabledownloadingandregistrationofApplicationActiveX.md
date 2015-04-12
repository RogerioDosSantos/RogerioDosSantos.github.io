---
layout: post
type: "blog"
subject: "Indusoft"
title: "Enable downloading and registration of Application ActiveX on your Indusoft application"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

The project ({ApplicationName}.APP file) can be configured to download external ActiveX controls and register them automatically on the Thin Client station. This algorithm was modified to show an error message if, after downloading and installing the control, we don't find it in the registry (probably because the user specified a wrong CLSID).

The following examples shows the INI entries that are configured to enable the automatic download of the ActiveX controls.

     [UsedControls]
     EnableDownload=1
     Count=5

where:

EnableDownload - Enable (1) or Disable (0) the ActiveX installation

Count - The number of items to be installed

     [UsedControl1]
     CLSID=2300A96F-23BB-4CF3-9521-07211CA51DBA
     Version=1.0.0.1
     Codebase=AddOns/IndDateTimePicker.ocx

where:

CLSID - ActiveX control CLSID, which can be found in the registry by searching for the already registered control inside the key HKEY_CLASSES_ROOT\CLSID (for instance, search for myocx.ocx inside this key)

Version - The version of the ActiveX control. In case an older version is registered on the target computer, the ActiveX will also be downloaded and registered.

Codebase - Control path, it can be either a complete URL. E.g.: http://myserver/mycontrol or a URL relative to the application Web Folder as shown on the examples below.


     [UsedControl2]
     CLSID=abc7185F-5488-11D3-801D-00C026A22F30
     Version=1.0.0.0
     Codebase=AddOns/MyCab.CAB
     RegFile1=MyOCX.ocx
     RegFile2=MyOCX2.ocx


where:

Codebase - The control can be in a cab file, in this case we download the cab and extract it to "C:\WINDOWS\DOWNLOADED PROGRAM FILES"

RegFile1 - Controls inside the cab file that need to be registered

RegFile2 - Controls inside the cab file that need to be registered


     [UsedControl3]
     CLSID=7A808F94-7E8C-426E-AF38-055B6AA96845
     Version=1.0.0.1
     Codebase=AddOns/IndTabBar.ocx


     [UsedControl4]
     CLSID=2D73F484-7309-41AE-9329-D235981E9459
     Version=1.0.0.1
     Codebase=AddOns/IndTreeView.ocx


     [UsedControl5]
     CLSID=B987185F-5488-11D3-801D-00C026A22F30
     Version=1.0.0.0
     Codebase=AddOns/vcDateTimePicker.ocx



                    