---
layout: post
title: "Reordering Disk Partition Tables"
description: "How I use sfdisk to reorder disk partition tables."
date: 2021-08-18
image: "/images/linux/linux_tux_200x200.png"
categories: ["linux"]
tags: ["linux", "reorder-partitions", "partitions"]
---
## How I use "sfdisk" to reorder disk partition tables

### 1. Backup existing partition table

`sfdisk -d /dev/sda > sda.bkp`


### 2. Then edit sda.bkp changing ONLY the lines order and partition numbers

For Example:

From

```
label: dos
label-id: 0xdb6d01ef
device: /dev/sda
unit: sectors

/dev/sda1 : start=  1026048, size=975747120, Id=83
/dev/sda2 : start=     2048, size=   204800, Id=83
/dev/sda3 : start=   206848, size=   819200, Id= b
/dev/sda4 : start=        0, size=        0, Id= 0
```

To

```
label: dos
label-id: 0xdb6d01ef
device: /dev/sda
unit: sectors

/dev/sda1 : start=     2048, size=   204800, Id=83
/dev/sda2 : start=   206848, size=   819200, Id= b
/dev/sda3 : start=  1026048, size=975747120, Id=83
/dev/sda4 : start=        0, size=        0, Id= 0
```

### 3. Then write the changes back to disk

`sfdisk --no-reread -f /dev/sda < sda.bkp`

### 4. Last steps
Optionally consider running "boot-repair" where appropriate.