---
layout: post
title: "HTMX + Golang"
description: "Basic HTMX Application using Go 1.22 with net/http and html/template."
date: 2024-04-20
image: "/images/development/htmx-golang/htmx_golang_200x200.png"
categories: ["development", "htmx", "golang"]
tags: ["htmx", "golang", "go", "template", "templates", "templating"]
---
Basic HTMX Application using Go 1.22 with the [net/http](https://pkg.go.dev/net/http) package to create a simple HTTP Server and the [html/template](https://pkg.go.dev/html/template) package to generate basic templates.

This post is intended for developers who have a basic knowledge of HTML and Golang. It serves purely as an example for educational purposes only and it should not be used in production.

## Package Name and Imports

Set the package name and the import used in the following code.

```go
package main

import (
"bytes"
"context"
"fmt"
"html/template"
"log"
"net/http"
"os"
"os/signal"
"path"
"strings"
"syscall"
)
```

## Constants

These values can be changed to suit your needs.

```go
const host = "127.0.0.1:8888"

const appTitle = "HTMX Demo"

const contentTypeTextHTML string = "text/html; charset=UTF-8"

const contentTypeJavascript string = "application/javascript; charset=UTF-8"
```

## Main Function

This function sets up the HTTP Server and uses signals to close down the server if CTRL + C is pressed in the terminal window.

```go
func main() {

	var httpServer *http.Server
	var stopChan chan os.Signal

	router := http.NewServeMux()

	router.HandleFunc("/", MainHandler)
	router.HandleFunc("/javascript/", JSHandler)

	router.HandleFunc("/request-table", RequestTableHandler)

	log.Printf(`Starting %s http://%s`, appTitle, host)

	httpServer = &http.Server{
		Addr:    host,
		Handler: router,
	}

	stopChan = make(chan os.Signal, 1)
	signal.Notify(stopChan, os.Interrupt, syscall.SIGTERM)

	go func() {
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("ListenAndServe(): %s", err)
		}
	}()

	<-stopChan

	if err := httpServer.Shutdown(context.Background()); err != nil {
		log.Fatalf("HTTP shutdown error: %v", err)
	}

	log.Printf(`Shutting down %s`, appTitle)
}
```

##  MainHandler

This function is the default handler. It sets the Content-Type HTTP Header then gets the content of the Request Table as a string to embed in the Main template. The ParseTemplate function is called to generate the template in the returned string. The last line outputs the string containing the generated HTML.

```go
func MainHandler(responseWriter http.ResponseWriter, httpRequest *http.Request) {

	responseWriter.Header().Set("Content-Type", contentTypeTextHTML)
	
	mainData := map[string]any{
	"title": appTitle,
	"requestTable": GetRequestTable(httpRequest),
	}
	
	fmt.Fprint(responseWriter, ParseTemplate("main", mainData))
}
```


## JSHandler

This functions sets the correct HTTP Header in order the serve the files in the javascript directory. This is important as the browser may not run the javascript code if this is not done.

```go
func JSHandler(responseWriter http.ResponseWriter, httpRequest *http.Request) {
	
	responseWriter.Header().Set("Content-Type", contentTypeJavascript)
	
	http.ServeFile(responseWriter, httpRequest, `javascript/`+path.Base(httpRequest.URL.Path))
}
```

##  RequestTableHandler

This function calls the GetRequestTable functions that returns the Request Table template in the returned string which includes the Request Method and any HTMX headers that are received.

```go
func RequestTableHandler(responseWriter http.ResponseWriter, httpRequest *http.Request) {

	responseWriter.Header().Set("Content-Type", contentTypeTextHTML)
	
	fmt.Fprint(responseWriter, GetRequestTable(httpRequest))
}
```

## GetRequestTable

This function calls the ParseTemplate function which generates the Request Table template as a string and then returns it to the calling function.

```go
func GetRequestTable(httpRequest *http.Request) string {

	data := map[string]any{
		"requestMethod": httpRequest.Method,
		"httpHeader":    httpRequest.Header,
	}

	return ParseTemplate("request-table", data)
}
```

## ParseTemplate

This function generates a template as a string using the templateName parameter and Data parameter if passed. It uses the [html/template](https://pkg.go.dev/html/template) package to do this. It includes two helper functions: "hasPrefix," which is used in the Request Table template to filter HTMX Headers preceded by 'Hx', and "rawHTML," which is used in the Main template to output HTML without being escaped. The templates are read from the "templates" directory.

Any generated errors are deliberately included in the returned string for simplicity as this is a proof of concept example and because, in this specific use case, the errors would be output straight to the display anyway. In a production application or even something more permanent you should probably return errors as a separate return parameter to be dealt with accordingly by the calling function.

```go
func ParseTemplate(templateName string, Data ...map[string]any) string {

	// optional data parameter
	data := map[string]any{}
	if Data != nil && Data[0] != nil {
		data = Data[0]
	}

	var err error
	var tmpl *template.Template
	var outputBuffer bytes.Buffer
	var outputString string

	filename := fmt.Sprintf(`%s.html`, templateName)
	filePath := fmt.Sprintf(`templates/%s`, filename)

	tmpl, err = template.New(filename).Funcs(template.FuncMap{
		"hasPrefix": strings.HasPrefix,
		"rawHTML": func(htmlString string) template.HTML {
			return template.HTML(htmlString)
		},
	}).ParseFiles(filePath)

	if err == nil {
		err = tmpl.Execute(&outputBuffer, data)
		if err == nil {
			outputString = outputBuffer.String()
		}
	}

	if err != nil {
		outputString = err.Error() // deliberately added to output string
	}

	return outputString
}
```

##  Javascript

This application uses [HTMX version 1.9.9](/javascript/htmx199.min.js) from the [HTMX Website](https://htmx.org/) downloaded and saved in the "javascript" directory. It does use javascript which still needs to be enabled in the browser but you do not have write any javascript code yourself in order to use it. Instead, tag attributes are embedded in your HTML code to define the requests to the server."

## Templates

The following templates saved in the "templates" directory are used.

### main.html

```html
<!DOCTYPE html>
<html lang="en-GB">

<head>

<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{{.title}}</title>

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

<h3>{{.title}}</h3>

<button hx-get="/request-table" hx-target="#requestTable">get</button>
<button hx-post="/request-table" hx-target="#requestTable">post</button>
<button hx-put="/request-table" hx-target="#requestTable">put</button>
<button hx-patch="/request-table" hx-target="#requestTable">patch</button>
<button hx-delete="/request-table" hx-target="#requestTable">delete</button>

<br><br>

<table id="requestTable">{{- if .requestTable -}}{{ rawHTML .requestTable }}{{- end -}}</table>

</body>
</html>
```

### request-table.html

```html
<tr><th>Name</th><th>Value</th></tr>
<tr><td>Request Method</td><td>{{.requestMethod}}</td></tr>
{{- range $headerName, $headerValue := .httpHeader -}}
    {{- if hasPrefix $headerName "Hx" -}}
        <tr><td>{{$headerName}}</td><td>{{index $headerValue 0}}</td></tr>
    {{- end -}}
{{- end -}}
```

## Futher Reading

More information about the [net/http](https://pkg.go.dev/net/http), [html/template](https://pkg.go.dev/html/template) and other packages can be found on the [Go Website](https://golang.org/) and many tutorials are available online.