---
layout: post
title: "Golang JSON Marshal"
description: "Marshal JSON data without escaping HMTL characters."
date: 2024-04-16
image: "/images/development/golang/gopher_200x200.png"
categories: ["development", "golang", "json"]
tags: ["golang", "go", "json", "marshal"]
---
Go's [json.Marshal](https://pkg.go.dev/encoding/json#Marshal) and [json.MarshalIndent](https://pkg.go.dev/encoding/json#MarshalIndent) functions escapes HTML data.

This may be useful for some circumstances when it is being output in a browser but it is not useful when your programs expects data without escaping.

Here are a couple of functions that Marshal JSON data without escaping HTML characters.

### JSON_Marshal

```go
func JSON_Marshal(input interface{}) ([]byte, error) {
	//------------------------------------------------------------
	var err error
	var encodeBuffer bytes.Buffer
	//------------------------------------------------------------
	encoder := json.NewEncoder(&encodeBuffer)
	encoder.SetEscapeHTML(false)
	//------------------------------------------------------------
	err = encoder.Encode(input)
	if err != nil {
		return nil, err
	}
	//------------------------------------------------------------
	return bytes.TrimRight(encodeBuffer.Bytes(), "\n"), err
	//------------------------------------------------------------
}
```

### JSON_MarshalIndent

```go
func JSON_MarshalIndent(input interface{}, prefix string, indent string) ([]byte, error) {
	//------------------------------------------------------------
	var err error
	var encodeBuffer bytes.Buffer
	var indentBuffer bytes.Buffer
	//------------------------------------------------------------
	encoder := json.NewEncoder(&encodeBuffer)
	encoder.SetEscapeHTML(false)
	//------------------------------------------------------------
	err = encoder.Encode(input)
	if err != nil {
		return nil, err
	}
	//------------------------------------------------------------
	err = json.Indent(&indentBuffer, bytes.TrimRight(encodeBuffer.Bytes(), "\n"), prefix, indent)
	if err != nil {
		return nil, err
	}
	//------------------------------------------------------------
	return indentBuffer.Bytes(), err
	//------------------------------------------------------------
}
```

## Further Reading

More information about the [encoding/json](https://pkg.go.dev/encoding/json) package can be found on the [Go Website](https://golang.org/).