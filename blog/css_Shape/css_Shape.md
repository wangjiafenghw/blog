# css Shapes初探
> 题记

css体内蕴藏在巨大的能量，前段时间听说有人用css完成和黑客窃取信息的操作，在下听了真是要给他跪了，虽然我们不提倡这种行为，但是这提醒我是时候重新认识css了。 

> 简介

shapes算是一类css3的属性，那么性质如下：
|名称|解释|
|-------|-----|
|shape-image-threshold|CSS属性定义使用alpha通道阈值提取形状shape-outside使用一个图像作为值。|
|shape-outside|CSS属性定义一个图形,可能non-rectangular-around相邻内联内容应该包装。默认情况下,内联内容包装在其边缘框;shape-outside提供了一种方法来定制包装,使包装文本周围复杂的对象,而不是简单的盒子|
|shape-margin|The shape-margin CSS property specifies a margin for a CSS shape created using shape-outside.|
* tips:以上信息为MDN翻译得来，（我想说什么跟什么呀，难以理解）

下面我会把我通过使用的理解跟大家分享一下。

### shape-outside
先给大家介绍一下```shape-outside```的用法吧，汉语直译就是```形状外观```，其实差不多就是这个意思