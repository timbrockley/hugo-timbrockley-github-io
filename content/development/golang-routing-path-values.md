---
layout: post
title: "Go Routing Path Values"
description: "Go 1.22 Routing Enhancements - Path Values."
date: 2024-04-19
image: "/images/development/golang/gopher_200x200.png"
categories: ["development", "go", "routing"]
tags: ["golang", "go", "routing", "path-values"]
---
Go 1.22 Routing Enhancements include improvements to deal with Path Values.

This post is intended for developers who have a basic knowledge of HTML and Go. It serves purely as an example for educational purposes only and it should not be used in production.

## Package Name and Imports

Set the package name and the import used in the following code.

```go
package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)
```

## Constants

These values can be changed to suit your needs.

```go
const host = "127.0.0.1:8888"

const appTitle = "Routing Path Values"

const contentTypeTextHTML string = "text/html; charset=UTF-8"
```

## Main Function

This function sets up the HTTP Server and routes.

```go
func main() {

	var httpServer *http.Server

	router := http.NewServeMux()

	router.HandleFunc("/", RouteHandler)
	router.HandleFunc("/route/{pathValue}", RouteHandler)

	log.Printf(`Starting %s http://%s`, appTitle, host)

	httpServer = &http.Server{
		Addr:    host,
		Handler: router,
	}

	err := httpServer.ListenAndServe()

	if err != nil {
		log.Fatalf("ListenAndServe(): %s", err)
	}
}
```

##  RouteHandler

This function outputs html with two buttons. Each button makes a request with different Path Values.

If a non-blank Path Value is received it is display at the bottom of the page.

```go
func RouteHandler(responseWriter http.ResponseWriter, httpRequest *http.Request) {

	responseWriter.Header().Set("Content-Type", contentTypeTextHTML)

	pathValue := httpRequest.PathValue("pathValue")

	escapedPathString := ""

	if pathValue != "" {
		escapedPathString = template.HTMLEscapeString(fmt.Sprintf(`Path Value = "%s"`, pathValue))
	}

	htmlTemplate := `
	<html>
	<body>
	<form name="form1" action="/route/route1" method="post">
	<button>Route 1</button>
	</form>
	<form name="form2" action="/route/route2" method="post">
	<button>Route 2</button>
	</form>
	<div>%s</div>
	</body>
	</html>
	`

	fmt.Fprint(responseWriter, fmt.Sprintf(htmlTemplate, escapedPathString))
}
```

## Troubleshooting

When I was first tested this code, it did not detect the Path Values correctly. After a Google search and checking coding forums which advised checking the version in the "go.mod" and "go.work" files in the project. I found that these files had not been updated when I installed the new version of Golang. After correcting this issue, the code worked correctly.

## Further Reading

More information about the [net/http](https://pkg.go.dev/net/http) package can be found on the [Go Website](https://golang.org/).