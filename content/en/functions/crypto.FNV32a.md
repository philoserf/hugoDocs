---
title: crypto.FNV32a
description: Returns the FNV (Fowler–Noll–Vo) 32 bit hash of a given string.
categories: [functions]
menu:
  docs:
    parent: functions
keywords: []
namespace: crypto
relatedFuncs:
  - crypto.FNV32a
  - crypto.HMAC
  - crypto.MD5
  - crypto.SHA1
  - crypto.SHA256
signature:
  - crypto.FNV32a STRING
---

This function calculates the 32 bit [FNV1a hash](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-1a_hash) of a given string according to the [specification](https://datatracker.ietf.org/doc/html/draft-eastlake-fnv-12):

```go-html-template
{{ crypto.FNV32a "Hello world" }} → 1498229191
```
