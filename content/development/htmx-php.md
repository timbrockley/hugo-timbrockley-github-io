---
layout: post
title: "HTMX + PHP"
description: "Basic HTMX Application using PHP 8.1.2 and basic templates."
date: 2024-06-09
image: "/images/development/htmx-php/htmx_php_200x200.png"
categories: ["development", "htmx", "php"]
tags: ["htmx", "php", "template", "templates", "templating"]
---
Basic HTMX Application using PHP 8.1.2 and basic user defined templates. The HTML and PHP is hosted on a local Apache server.

This post is intended for developers who have a basic knowledge of HTML, PHP and Apache. It serves purely as an example for educational purposes only and it should not be used in production.

## Initial Setup And Headers

Set up error reporting, Title variable and Content-Type header. This is only a demonstration and you should consider changing these values to suit your circumstances.

```php
<?php

declare(strict_types = 1);
ini_set("display_errors", 1); ini_set("display_startup_errors", 1); error_reporting(E_ALL);

$title = "HTMX Demo";

header("Content-Type: text/html; charset=UTF-8");
```

## Check "hx-request" Header

If the "hx-request" header is not equal to "true" then assume this is the initial "GET" request from the browser and call the "main_html" function. Otherwise call the "table_html" function.

```php
if(!isset($_SERVER["HTTP_HX_REQUEST"]) || $_SERVER["HTTP_HX_REQUEST"] !== "true")
{
    main_html();
}
else
{
    table_html();
}
```

## Main HTML Template

This function parses the "main" and "request-table" templates parsed. The Title and HTTP Request Method is injected into the templates before being output.

In this example, if there are any errors, they are output to the screen for simplicity as this is just a demonstration and not a production ready application.

```php
function main_html() : void
{
    global $title;

    [$mainTemplateString, $err] = read_template("main");

    if($err !== "")
    {
        echo $err;
    }
    else
    {
        [$requestTableTemplateString, $err] = read_template("request-table");

        if($err !== "")
        {
            $requestTableTemplateString = $err;
        }
        else
        {
			$data = ["{{requestMethod}}" => $_SERVER["REQUEST_METHOD"]];

            $requestTableTemplateString = parse_template($requestTableTemplateString, $data);
        }

        $mainTemplateString = parse_template($mainTemplateString, ["{{title}}" => $title]);

        $data = ["{{{requestTable}}}" => $requestTableTemplateString];

        $mainTemplateString = parse_template($mainTemplateString, $data, false);

        echo $mainTemplateString;
    }
}
```

##  Table HTML Template

This function parses the "request-table" template. The HTTP Request Method is injected into the template before being output.

As above, if there are any errors, they are output to the screen.

The template only outputs the required HTML to be injected into an existing "table" element inside the DOM. This should be done automatically by the "HTMX" library.

```php
function table_html() : void
{
    [$requestTableTemplateString, $err] = read_template("request-table");

    if($err !== "")
    {
        $requestTableTemplateString = $err;
    }
    else
    {
        $data = ["{{requestMethod}}" => $_SERVER["REQUEST_METHOD"]];

        $requestTableTemplateString = parse_template($requestTableTemplateString, $data);
    }

    echo $requestTableTemplateString;
}
```

## Parse Template

This function generates a template as a string using the "templateString" parameter and "data" parameter, if passed, to replace fields inside the template. The "encodeHTML" parameter defaults to true and will escape special HTML characters. This parameter can be set to false when calling the function in order to gererate non escaped output.

```php
function parse_template(string $templateString="", array $data=[], bool $encodeHTML=true) : string
{
    if(!is_string($templateString) || $templateString === ""){ return ""; }

    if(isset($data) && ( !is_array($data) || count($data) ) === 0){ return ""; }

    foreach($data as $key => $value)
    {
        if($encodeHTML === true){ $value = htmlspecialchars($value); }

        $templateString = str_replace($key, $value, $templateString);
    }

    return $templateString;
}
```

## Read Template

This function reads a template file from the "templates" directory and returns an array containing the "data" and "error" variables.

If sucessful then the "data" variable will contain the data from the template file as a string.

If an error occurs then the "error" variable will contiain the error as a string.

```php
function read_template(string $templateName="") : array
{
    if(!isset($templateName) || !is_string($templateName) || $templateName==="")
    { return ["", "templateName is not defined or is not a string"]; }

    $templateFileame = "templates/{$templateName}.html";

    if(!file_exists($templateFileame))
    { return ["", "template file does not exist: {$templateFileame}"]; }

    $data = file_get_contents($templateFileame);

    if(!is_string($data))
    { return ["", "an error occurred while tring to read template file: {$templateFileame}"]; }

    return [$data, ""];
}
```

##  Javascript

HTMX does use javascript which still needs to be enabled in the browser but you do not have write any javascript code yourself in order to use it. Instead, tag attributes are embedded in your HTML code to define the requests to the server."

This application uses [HTMX version 1.9.9](/javascript/htmx199.min.js) downloaded and saved in the "javascript" directory.

## Templates

The following templates saved in the "templates" directory are used.

### main.html

```html
<!DOCTYPE html>
<html lang="en-GB">

<head>

<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{{title}}</title>

<script src="javascript/htmx199.min.js"></script>

<style>
body { background-color: #DDD; font-family: monospace; font-size: large; }
table { border-collapse: collapse; border-spacing: 0; }
th, td { border: 1px solid black; padding: 8px; background-color: #EEE; text-align: left; }
button
{
    display: inline-block;
    background-color: #CCC;
    color: black;
    padding: 4px;
    text-align: center;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}
</style>

</head>

<body>

<h3>{{title}}</h3>

<button hx-get="" hx-target="#requestTable">get</button>
<button hx-post="" hx-target="#requestTable">post</button>
<button hx-put="" hx-target="#requestTable">put</button>
<button hx-patch="" hx-target="#requestTable">patch</button>
<button hx-delete="" hx-target="#requestTable">delete</button>

<br><br>

<table id="requestTable">{{{requestTable}}}</table>

</body>
</html>
```

### request-table.html

```html
<tr><th>Name</th><th>Value</th></tr>
<tr><td>Request Method</td><td>{{requestMethod}}</td></tr>
```

## Further Reading

More information about about HTMX can be found on the [HTMX Website](https://htmx.org/).

More information about PHP can be found on the [PHP Website](https://php.net/).

More information about Apache can be found on the [Apache Website](https://httpd.apache.org/).
