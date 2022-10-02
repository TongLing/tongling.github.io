---
layout: page
title: Bachelor Graduation Ceremony
description: When a happy moment becomes a memory, it becomes a treasure.
img: assets/img/8.jpg
importance: 2
category: life
images:
  - _MG_6159.jpeg
  - _MG_6237.jpeg
  - _MG_6250.jpeg
---

<style>
    .image-gallery {overflow: auto; margin-left: -1%!important;}
    .image-gallery a {float: left; display: block; margin: 0 0 1% 1%; width: 19%; text-align: center; text-decoration: none!important;}
    .image-gallery a span {display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 3px 0;}
    .image-gallery a img {width: 100%; display: block;}
</style>

<ul class="image-gallary">
{% for image in page.images %}
    <li class="something">
    <a rel="something" class="something" href="/assets/img/project/graduation-images/compressed/{{ image }}" />
    </li>
{% endfor %}
</ul>