---
layout: post
title: "Create a macOS Installer"
description: "How to create a macOS Installer on a bootable USB Drive."
date: 2023-03-26
image: "/images/mac/mac-macos-monterey-logo-200x200.png"
categories: ["mac"]
tags: ["mac", "macos", "operating system", "os", "monterey", "usb", "boot", "install"]
---
How to create a macOS Installer on a bootable USB Drive.

## Download macOS
Download the version of compatible macOS from the App Store.

![mac](/images/mac/mac-launchpad-app-store.png)

![mac](/images/mac/mac-app-store-macos-monterey.png)

This could take a long time as the macOS intstaller currently downloads around 13GB of data. Once the download is complete, an "Install macOS" window should appear.

![mac](/images/mac/mac-macos-monterery-install-window.png)

Choose the "Quit Install macOS" menu option.

![mac](/images/mac/mac-quit-install-macos-monterey.png)

## Erase USB Drive
Use "Disk Utility" to erase the USB Drive using the "Mac OS Extended (Journaled)" format.

![mac](/images/mac/mac-launchpad-disk-utility.png)

![mac](/images/mac/mac-disk-utility-erase-usb-drive-install-macos-monterey.png)

## Create the Install macOS USB Drive

Go to the "Applications" folder using "Finder" and right click on "Install macOS" then select "Show Package Contents".

![mac](/images/mac/mac-install-macos-monterey-show-package-contents.png)


Double click on the "Contents" folder then double click on the "Resources" folder.

![mac](/images/mac/mac-folder-icon-contents.png) &nbsp;&nbsp; ![mac](/images/mac/mac-folder-icon-resources.png)

Open terminal and type "sudo ".

![mac](/images/mac/mac-terminal-sudo.png)

Drag the "createinstallmedia" icon onto terminal window. This will copy the filename to the end of the line.

![mac](/images/mac/mac-folder-icon-createinstallmedia.png)

![mac](/images/mac/mac-terminal-sudo-install-macos-monterey-contents-resources-createinstallmedia.png)

add "--volume " to the end of the line.

![mac](/images/mac/mac-terminal-sudo-install-macos-monterey-contents-resources-createinstallmedia-volume.png)

Drag the USB Drive icon onto terminal window from the desktop (If not showing on the desktop then you should be able to find the volumne in the "/Volumes" folder).

![mac](/images/mac/mac-terminal-sudo-install-macos-monterey-contents-resources-createinstallmedia-volume-macos-monterey.png)

Press "Enter" to begin the process and follow the instructions. You may be asked for an authorisation password.

![mac](/images/mac/mac-macos-terminal-createinstallmedia-confirmation.png)

Type "Y" and press "Enter" to continue.

![mac](/images/mac/mac-macos-terminal-createinstallmedia-output.png)

This process may take some time to complete.
