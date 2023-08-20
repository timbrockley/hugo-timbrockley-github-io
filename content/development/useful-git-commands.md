---
layout: post
title: "Useful Git Commands"
description: "A list of Git commands that I have found useful."
date: 2021-09-01
image: "/images/development/useful-git-commands/git_logo_200x200.png"
categories: ["development"]
tags: ["git", "dangling-commits", "dangling-blobs", "remove-dangling-commits", "remove-dangling-blobs"]
---
## git-init

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-init" target="_blank">git-init - Create an empty Git repository or reinitialize an existing one</a>
<br>
<br>
{{< /rawhtml >}}
```
git init [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git init
```

## git-config
{{< rawhtml >}}<a href="https://git-scm.com/docs/git-config" target="_blank">git-config - Get and set repository or global options</a>
<br>
<br>
{{< /rawhtml >}}
```
git config [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
{{< rawhtml >}}<span style="text-decoration:underline">Email Address & Username</span>{{< /rawhtml >}}
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
{{< rawhtml >}}<span style="text-decoration:underline">Default Branch Name</span>{{< /rawhtml >}}
git config --global init.defaultBranch main
{{< rawhtml >}}<span style="text-decoration:underline">Aliases</span>{{< /rawhtml >}}
git config --global alias.add-commit '!git add -A && git commit'
{{< rawhtml >}}<span style="text-decoration:underline">If using a repo setup in windows and then running git on linux</span>{{< /rawhtml >}}
git config --global core.autocrlf input
```

## git-status

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-status" target="_blank">git-status - Show the working tree status</a>
<br>
<br>
{{< /rawhtml >}}
```
git status [OPTIONS] [PATHSPEC]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git status
```

## git-add

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-add" target="_blank">git-add - Add file contents to the index</a>
<br>
<br>
{{< /rawhtml >}}
```
git add [OPTIONS] [PATHSPEC]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git add .
git add index.html
git add git-*.sh
```


## git-stash

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-stash" target="_blank">git-stash - Stash the changes in a dirty working directory away</a>
<br>
<br>
{{< /rawhtml >}}
```
git stash list [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git stash -u [push]
git stash pop
git stash list
```


## git-commit

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-commit" target="_blank">git-commit - Record changes to the repository</a>
<br>
<br>
{{< /rawhtml >}}
```
git commit [OPTIONS] [PATHSPEC]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git commit -am "commit message"
git commit --amend -am "amended commit message"
git commit --amend
```


## git-gui

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-gui" target="_blank">git-gui - A portable graphical interface to Git</a>
<br>
<br>
{{< /rawhtml >}}
```
git gui [COMMAND] [ARGUMENTS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git gui
```


## git-reset

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-reset" target="_blank">git-reset - Reset current HEAD to the specified state</a>
<br>
<br>
{{< /rawhtml >}}
```
git reset [OPTIONS] [PATHSPEC]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git reset --soft HEAD~1
git reset --hard HEAD~1
```


## git-fsck

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-fsck" target="_blank">git-fsck - Verifies the connectivity and validity of the objects in the database</a>
<br>
<br>
{{< /rawhtml >}}
```
git fsck [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git fsck
```


## git-reflog

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-reflog" target="_blank">git-reflog - Manage reflog information</a>
<br>
<br>
{{< /rawhtml >}}
```
git reflog [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git reflog expire --expire=now --all
```


## git-gc

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-gc" target="_blank">git-gc - Cleanup unnecessary files and optimize the local repository</a>
<br>
<br>
{{< /rawhtml >}}
```
git gc [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git gc --prune=now
```


## git-remote

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-remote" target="_blank">git-remote - Manage set of tracked repositories</a>
<br>
<br>
{{< /rawhtml >}}
```
git remote [OPTIONS]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```


## git-pull

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-pull" target="_blank">git-pull - Fetch from and integrate with another repository or a local branch</a>
<br>
<br>
{{< /rawhtml >}}
```
git pull [OPTIONS] [REPO_NAME] [REFSPEC]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git pull
```


## git-push

{{< rawhtml >}}<a href="https://git-scm.com/docs/git-push" target="_blank">git-push - Update remote refs along with associated objects</a>
<br>
<br>
{{< /rawhtml >}}
```
git push [OPTIONS] [REPO_NAME] [REFSPEC]
{{< rawhtml >}}<span style="text-decoration:underline">Examples</span>{{< /rawhtml >}}
git push
```
