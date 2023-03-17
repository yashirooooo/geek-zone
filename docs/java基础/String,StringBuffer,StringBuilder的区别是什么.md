---
title: String,StringBuffer, StringBuilder的区别是什么?
---

1.可变与不可变。String类中使用字符数组保存字符串，因为有“final”修饰符，所以string对象是不可变的。**对于已经存在的String对象的修改都是重新创建一个新的对象,然后把新的值保存进去.**

String类利用了final修饰的char类型数组存储字符，源码如下:

`private final char value[];`

StringBuilder与StringBuffer都继承自AbstractStringBuilder类，在AbstractStringBuilder中也是使用字符数组保存字符串，这两种对象都是可变的。

源码如下:

`char[] value;`

2.是否多线程安全。

String中的对象是不可变的，也就可以理解为常量，显然线程安全。

StringBuilder是非线程安全的。

StringBuffer对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。

源码如下:

```java
    @Override
    public synchronized StringBuffer append(String str) {
        toStringCache = null;
        super.append(str);
        return this;
    }
```

3.性能

每次对String 类型进行改变的时候，都会生成一个新的String对象，然后将指针指向新的String 对象。StringBuffer每次都会对StringBuffer对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用StirngBuilder 相比使用StringBuffer 仅能获得10%~15% 左右的性能提升，但却要冒多线程不安全的风险。