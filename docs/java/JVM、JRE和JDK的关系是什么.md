---
title: JVM、JRE和JDK的关系是什么？
---

JDK是（Java Development Kit）的缩写，它是功能齐全的 Java SDK。它拥有 JRE 所拥有的一切，还有编译器（javac）和工具（如 javadoc 和 jdb）。它能够创建和编译程序。

JRE是Java Runtime Environment缩写，它是运行已编译 Java 程序所需的所有内容的集合，包括 Java 虚拟机（JVM），Java 类库，java 命令和其他的一些基础构件。但是，它不能用于创建新程序。

JDK包含JRE，JRE包含JVM。

![jdk](/img/java/jdk.png)