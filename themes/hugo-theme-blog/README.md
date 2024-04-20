## Hugo Blog Theme


  - [Key Features](#key-features)
  - [Configuration (config.toml)](#configuration-configtoml)
  - [Front Matter Variables](#front-matter)


### Key Features
* Default List and Single Templates
* Header, Sidebar and Footer CSS Template
* Section, Categories and Tags Navigation
* Configurable Settings from site toml file / Front Matter Variables


### Configuration (config.toml)

**Required**

```toml
theme = "hugo-theme-blog"
```
**Recommend Options (set your own values)**

```toml
languageCode = "en-GB"

baseURL = "http://example.org/"
title = "Hugo Blog Site"
```
(Using different URL settings may result in site links not working properly).

**Copyright Options (set your own values)**
```toml
copyright = "Copyright Owner / Information"

[Params]
  copyright_owner = "Copyright Owner"
  copyright_year = 2020
  copyright_year_start = 2020
  copyright_year_end = 2020
```
If no copyright options are set then the site title is displayed in the footer bar.

If set then copyright information are used in the following order.

1. if "copyright" set is then this text is displayed and other copyright options are ignored.
2. if "copyright_year" is set then it is displayed, "copyright_year_start" and "copyright_year_end" are ignored.
3. if "copyright_year_start" is set then it is displayed.
4. if "copyright_year_end" is set then it is displayed.
5. if "copyright_owner" is set but "copyright_year_end" is not set then the current year is displayed.
6. if "copyright_owner" is set then it is displayed.

**List Options**
```toml
[Params]
  list_sort_column = ""
  list_sort_order = ""
```
The default sort for tiles on list pages is by date in descending order.

1. If "list_sort_column" is set to "Title" or "title" then tiles are sorted by page title.
2. If "list_sort_order" is set to "asc" or "a" then tiles are sorted in ascending order.

**Limit Options**

```toml
[Params]
  limit_section_navigation = false
  limit_home_navigation = false
  limit_home_tiles = 0
```
1. If "limit_section_navigation" is true then pages in the sidebar select options will be limited to the current sections only.
2. If "limit_home_navigation" is true then, when on the home page, only tiles for pages in the home directory are displayed.
3. If "limit_home_tiles" is a number more than zero then the tiles displayed on the current list page are limited by that number.


### Front Matter Variables
Front matter values for title, description, date and image are displayed inside tiles on list pages.

Categories and tags are used in navigation panes on site sidebar.

_(Images should be correctly sized to fit in tiles on list pages)._


