---
layout: post
title: MySQLのshow tableをSQL Serverでも実施したい
description:
categories:
  - tech
tags:
  - SQL Server
img: common/research.jpg
---
## MySQLでいう`show table`をSQL Serverで実行
```
select * from sys.columns where object_id = object_id('TableName')
```
