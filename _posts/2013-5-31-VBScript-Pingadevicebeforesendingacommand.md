---
layout: post
type: "blog"
subject: "VBScript"
title: "Ping a device before sending a command using VBScript"
category: "development"
image: "post_script.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Below you can find a VBScript code that allows you by accessing the command of the operational system to ping a device and evaluate the result. This technique can be used with any shell command.

    On Error Resume Next

    Dim strTarget, strPingResults
    strTarget = "198.162.1.2" 'IP address or hostname

    Set WshShell = WScript.CreateObject("WScript.Shell")
    Set WshExec = WshShell.Exec("ping -n 3 -w 2000 " & strTarget) 'send 3 echo requests, waiting 2secs each
    strPingResults = LCase(WshExec.StdOut.ReadAll)
    If InStr(strPingResults, "reply from") Then
      WScript.Echo strTarget & " responded to ping."
    Else
       WScript.Echo strTarget & " did not respond to ping."
    End If


                    