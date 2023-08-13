---
layout: post
title: "Useful Git Commands"
description: "A list of Git commands that I have found useful."
date: 2021-09-01
image: "/images/development/useful-git-commands/git_logo_200x200.png"
categories: [development]
tags: [git, dangling-commits, dangling-blobs, remove-dangling-commits, remove-dangling-blobs]
---
## git-init

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-init" target="_blank">git-init - Create an empty Git repository or reinitialize an existing one</a>
<br>
<br>
{{< /rawhtml >}}

```
git init [<i>OPTIONS</i>]

<u>Examples</u>
git init
```

## git-config
{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-config" target="_blank">git-config - Get and set repository or global options</a>
<br>
<br>
{{< /rawhtml >}}

```
git config [<i>OPTIONS</i>]

<u>Examples</u>

<u>Email Address & Username</u>
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

<u>Default Branch Name</u>
git config --global init.defaultBranch main

<u>Aliases</u>
git config --global alias.add-commit '!git add -A && git commit'

<u>If using a repo setup in windows and then running git on linux</u>
git config --global core.autocrlf input
```

## git-status

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-status" target="_blank">git-status - Show the working tree status</a>
<br>
<br>
{{< /rawhtml >}}

```
git status [<i>OPTIONS</i>] [<i>PATHSPEC</i>]

<u>Examples</u>
git status
```

## git-add

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-add" target="_blank">git-add - Add file contents to the index</a>
<br>
<br>
{{< /rawhtml >}}

```
git add [<i>OPTIONS</i>] [<i>PATHSPEC</i>]

<u>Examples</u>
git add .
git add index.html
git add git-*.sh
```


## git-stash

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-stash" target="_blank">git-stash - Stash the changes in a dirty working directory away</a>
<br>
<br>
{{< /rawhtml >}}

```
git stash list [<i>OPTIONS</i>]

<u>Examples</u>
git stash -u [<i>push</i>]
git stash pop
git stash list
```


## git-commit

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-commit" target="_blank">git-commit - Record changes to the repository</a>
<br>
<br>
{{< /rawhtml >}}

```
git commit [<i>OPTIONS</i>] [<i>PATHSPEC</i>]

<u>Examples</u>
git commit -am "commit message"
git commit --amend -am "amended commit message"
git commit --amend
```


## git-gui

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-gui" target="_blank">git-gui - A portable graphical interface to Git</a>
<br>
<br>
{{< /rawhtml >}}

```
git gui [<i>COMMAND</i>] [<i>ARGUMENTS</i>]

<u>Examples</u>
git gui
```


## git-reset

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-reset" target="_blank">git-reset - Reset current HEAD to the specified state</a>
<br>
<br>
{{< /rawhtml >}}

```
git reset [<i>OPTIONS</i>] [<i>PATHSPEC</i>]

<u>Examples</u>
git reset --soft HEAD~1
git reset --hard HEAD~1
```


## git-fsck

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-fsck" target="_blank">git-fsck - Verifies the connectivity and validity of the objects in the database</a>
<br>
<br>
{{< /rawhtml >}}

```
git fsck [<i>OPTIONS</i>]

<u>Examples</u>
git fsck
```


## git-reflog

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-reflog" target="_blank">git-reflog - Manage reflog information</a>
<br>
<br>
{{< /rawhtml >}}

```
git reflog [<i>OPTIONS</i>]

<u>Examples</u>
git reflog expire --expire=now --all
```


## git-gc

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-gc" target="_blank">git-gc - Cleanup unnecessary files and optimize the local repository</a>
<br>
<br>
{{< /rawhtml >}}

```
git gc [<i>OPTIONS</i>]

<u>Examples</u>
git gc --prune=now
```


## git-remote

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-remote" target="_blank">git-remote - Manage set of tracked repositories</a>
<br>
<br>
{{< /rawhtml >}}

```
git remote [<i>OPTIONS</i>]

<u>Examples</u>
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```


## git-pull

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-pull" target="_blank">git-pull - Fetch from and integrate with another repository or a local branch</a>
<br>
<br>
{{< /rawhtml >}}

```
git pull [<i>OPTIONS</i>] [<i>REPO_NAME</i>] [<i>REFSPEC</i>]

<u>Examples</u>
git pull
```


## git-push

{{< rawhtml >}}
<a href="https://git-scm.com/docs/git-push" target="_blank">git-push - Update remote refs along with associated objects</a>
<br>
<br>
{{< /rawhtml >}}

```
git push [<i>OPTIONS</i>] [<i>REPO_NAME</i>] [<i>REFSPEC</i>]

<u>Examples</u>
git push
```
