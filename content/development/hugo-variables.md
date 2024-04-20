---
title: "Hugo Variables"
description: "Table of some useful Hugo variables which can be used in layout templates."
image: "/images/hugo_logo_200x200.png"
categories: [ "development", "hugo" ]
tags: [ "development", "documentation", "hugo", "variables" ]

date: 2020-07-30T21:54:14+01:00
draft: false
---

|                       | .IsHome | .IsNode | .IsPage | .Type      | .Kind    | .File.LogicalName | .File.Ext | .File.Dir  |
| --------------------- | ------- | ------- | ------- | ---------- | -------- | ----------------- | --------- | ---------- |
| /                     | true    | true    | false   | page       | home     |                   |           |            |
| /test1/               | false   | false   | true    | page       | page     | test1.md          | md        |            |
| /xyz1/xyz1test1/      | false   | false   | true    | xyz1       | page     | xyz1test1.md      | md        | xyz1/      |
| /xyz1/xyz2/xyz2test1/ | false   | false   | true    | xyz1       | page     | xyz2test1.md      | md        | xyz1/xyz2/ |
| /xyz1/                | false   | true    | false   | xyz1       | section  |                   |           |            |
| /categories/          | false   | true    | false   | categories | taxonomy |                   |           |            |
| /categories/cat1/     | false   | true    | false   | categories | term     |                   |           |            |
| /tags/                | false   | true    | false   | tags       | taxonomy |                   |           |            |
| /tags/tag1/           | false   | true    | false   | tags       | term     |                   |           |            |

