---
title: Oracle JDK 和 OpenJDK 的区别是什么？
---

可能在看这个问题之前很多人和我一样并没有接触和使用过OpenJDK。下面通过我通过我收集到一些资料对你解答这个被很多人忽视的问题。

- Oracle JDK 版本将每三年发布一次，而 OpenJDK 版本每三个月发布一次；
- OpenJDK 是一个参考模型并且是完全开源的，而 Oracle JDK 是OpenJDK 的一个实现，并不是完全开源的；
- Oracle JDK 比 OpenJDK 更稳定。OpenJDK 和 Oracle JDK 的代码几乎相同，但 Oracle JDK 有更多的类和一些错误修复。因此，如果您想开发企业/商业软件，建议选择 Oracle JDK，因为它经过了彻底的测试和稳定。某些情况下，有些人提到在使用 OpenJDK 可能会遇到了许多应用程序崩溃的问题，但是，只需切换到 Oracle JDK 就可以解决问题；
- 在响应性和 JVM 性能方面，Oracle JDK 与 OpenJDK 相比提供了更好的性能；
- Oracle JDK 不会为即将发布的版本提供长期支持，用户每次都必须通过更新到最新版本获得支持来获取最新版本；
- Oracle JDK 根据二进制代码许可协议获得许可，而 OpenJDK 根据 GPLv2 许可获得许可。

