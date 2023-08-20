---
layout: post
title: "Useful Linux Commands"
description: "A list of Linux commands that I have found useful."
date: 2021-08-18
image: "/images/linux/linux_tux_200x200.png"
categories: ["linux"]
tags: ["linux", "linux-command-line"]
---
## bindfs
{{< rawhtml >}}<a href="https://bindfs.org/docs/bindfs.1.html" target="_blank">bindfs - mount --bind in user-space</a>
<br>
<br>
{{< /rawhtml >}}
```
bindfs [OPTIONS] DIR MOUNT_POINT
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
bindfs -o force-user=www-data,force-group=www-data,perms=0550,nonempty /www /var/www
bindfs -o force-user=www-data,force-group=www-data,perms=0770,nonempty /www/data /var/www/data
```


## find
{{< rawhtml >}}<a href="https://linux.die.net/man/1/find" target="_blank">find - search for files in a directory hierarchy</a>
<br>
<br>
{{< /rawhtml >}}
```
find DIR -type f -iname 'FILE_PATTERN'
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
find test -type f -iname 'x*'
find test -type f -iname 'x*' -o -iname 'y*'

find test -type f -iname '*[*' -a -not -iname '*]*'
{{< rawhtml >}}<span style="text-decoration:underline">Convert files recursively</span>{{< /rawhtml >}}
find . -type f -print0 | xargs -0 dos2unix
```


## git
{{< rawhtml >}}<a href="https://git-scm.com/docs" target="_blank">git --fast-version-control</a>
<br>
<br>
{{< /rawhtml >}}
```
{{< rawhtml >}}<span style="text-decoration:underline">Email Address & Username</span>{{< /rawhtml >}}
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
{{< rawhtml >}}<span style="text-decoration:underline">If using a repo setup in windows and then running git on linux</span>{{< /rawhtml >}}
git config --global core.autocrlf input
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git status

git add .

git commit -am "commit message"

git commit --amend

git gui
```


## grep
{{< rawhtml >}}<a href="https://linux.die.net/man/1/grep" target="_blank">grep, egrep, fgrep - print lines that match patterns</a>
<br>
<br>
{{< /rawhtml >}}
```
grep [OPTION...] PATTERNS [FILE...]
grep [OPTION...] -e PATTERNS ... [FILE...]
grep [OPTION...] -f PATTERN_FILE ... [FILE...]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
grep -rnw '/path/' -e 'TEXT_TO_FIND'

-r or -R is recursive,
-n is line number, and
-w stands for match the whole word.
-l (lower-case L) can be added to just give the file name of matching files.
```


## gzip
{{< rawhtml >}}<a href="https://linux.die.net/man/1/gzip" target="_blank">gzip, gunzip, zcat - compress or expand files</a>
<br>
<br>
{{< /rawhtml >}}
```
gzip -stdout --best FILENAME > FILENAME.gz
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
gzip -stdout --best partclone.img > partclone.img.gz
```


## ln
{{< rawhtml >}}<a href="https://linux.die.net/man/1/ln" target="_blank">ln - make links between files</a>
<br>
<br>
{{< /rawhtml >}}
```
ln -s TARGET LINK_NAME
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
ln -s /media/data/downloads ~/downloads
```


## mount
{{< rawhtml >}}<a href="https://linux.die.net/man/8/mount" target="_blank">mount - mount a filesystem</a>
<br>
<br>
{{< /rawhtml >}}
```
mount [-fnrsvw] [-o OPTION[,OPTION]...] DEVICE|DIR

-o options
-t filesystem type
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
mount --type=vfat -o umask=007,uid=0,gid=500 /dev/sda1 /media/fat
mount -t ntfs-3g -o remove_hiberfile /dev/sda1 /media/ntfs
mount -o uid=0,gid=500,umask=007,noatime /dev/sda1 /media/data
mount -t cifs -o username=tim //192.168.0.1/data /mnt/data
```


## rsync
{{< rawhtml >}}<a href="https://linux.die.net/man/1/rsync" target="_blank">rsync -- a fast, versatile, remote (and local) file-copying tool</a>
<br>
<br>
{{< /rawhtml >}}
```
rsync [-OPTIONS] SOURCE DESTINATION

(trailing / important when referring to directory contents - see examples)

-r, --recursive             recurse into directories
-a, --archive               archive mode; equals -rlptgoD (no -H,-A,-X)
-v, --verbose               increase verbosity
-i, --itemize-changes       output a change-summary for all updates
-p, --perms                 preserve permissions
-u, --update                skip files that are newer on the receiver
     --delete                delete extraneous files from dest dirs
-l, --links                 copy symlinks as symlinks
-H, --hard-links            preserve hard links
-h, --human-readable        output numbers in a human-readable format
    --progress              show progress during transfer
    --exclude=PATTERN       exclude files matching PATTERN
-n, --dry-run               perform a trial run with no changes made
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
{{< rawhtml >}}<span style="text-decoration:underline">Mirror Source to Destination</span>{{< /rawhtml >}}
rsync -raviphl --progress --exclude='.fuse*' --delete /media/H/backups/ /media/O/backups/
{{< rawhtml >}}<span style="text-decoration:underline">Update Destination from Source</span>{{< /rawhtml >}}
rsync -raviphl --progress --exclude='.fuse*' /media/N/backups/ /media/H/backups/
```


## tar
{{< rawhtml >}}<a href="https://linux.die.net/man/1/tar" target="_blank">tar - manual page for tar</a>
<br>
<br>
{{< /rawhtml >}}
```
tar [OPTION...] [FILENAME]...
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
{{< rawhtml >}}<span style="text-decoration:underline">backup</span>{{< /rawhtml >}}
tar -cpvf home.tar /home
tar -cpvzf home.tar.gz /home

tar --exclude '/home/tim' -cpvzf backup.tar.gz /home

find test -type f -iname 'x*' | tar -cpvzf test.tar.gz -T -
find test -type f -iname 'x*' -o -iname 'y*' | tar -cpvzf test.tar.gz -T -
find test -type f -iname '*[*' -a -not -iname '*]*' | tar -cpvzf test.tar.gz -T -

tar -cpvzf - /home | openssl aes-256-ecb -out backup.tar.gz.aes
tar -cpvzf - /home | gpg --encrypt --output=backup.tar.gz.gpg
{{< rawhtml >}}<span style="text-decoration:underline">restore</span>{{< /rawhtml >}}
tar -xpvf backup.tar
tar -xpvzf backup.tar.gz

openssl aes-256-ecb -d -in backup.tar.gz.aes|tar xpvzf -
gpg --decrypt backup.tar.gz.gpg|tar xpvzf -
{{< rawhtml >}}<span style="text-decoration:underline">list contents</span>{{< /rawhtml >}}
tar -tvf backup.tar.gz
```


## taskset
{{< rawhtml >}}<a href="https://linux.die.net/man/1/taskset" target="_blank">taskset - retrieve or set a process's CPU affinity</a>
<br>
<br>
{{< /rawhtml >}}
```
taskset [options] mask command [arg]...
taskset [options] -p [mask] pid
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
{{< rawhtml >}}<span style="text-decoration:underline">get cpu affinity</span>{{< /rawhtml >}}
taskset -cp PID
{{< rawhtml >}}<span style="text-decoration:underline">set cpu affinity</span>{{< /rawhtml >}}
taskset -cp 1 PID
taskset -cp 1,2 PID
taskset -cp 0-3 PID
{{< rawhtml >}}<span style="text-decoration:underline">start process and set cpu affinity</span>{{< /rawhtml >}}
taskset -c 1 COMMAND
taskset -c 1,2 COMMAND
taskset -c 0-3 COMMAND
```


## uuid
{{< rawhtml >}}<a href="https://linux.die.net/man/1/uuid" target="_blank">uuid - Universally Unique Identifier Command-Line Tool</a>
<br>
<br>
{{< /rawhtml >}}
```
uuid [-v VERSION] [-m] [-n COUNT] [-1] [-F FORMAT] [-o FILENAME] [NAMESPACE_NAME]

uuid -d [-r] [-o FILENAME] UUID
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
uuid -v4
```


## zip
{{< rawhtml >}}<a href="https://linux.die.net/man/1/zip" target="_blank">zip - package and compress (archive) files </a>
<br>
<br>
{{< /rawhtml >}}
```
zip backup.zip FILENAME
zip backup.zip FILENAME1 FILENAME2

zip -r backup.zip DIRNAME
zip -r backup.zip DIRNAME1 DIRNAME2
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}

zip backup.zip .bashrc
zip backup.zip .bashrc .bash_aliases

zip -r backup.zip /home
zip -r backup.zip /home/tim /home/tux

find test -type f -iname 'x*' | zip backup.zip -@
find test -type f -iname 'x*' -o -iname 'y*' | zip backup.zip -@
```
