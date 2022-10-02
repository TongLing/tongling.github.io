---
layout: page
title: Bachelor Graduation Ceremony
description: When a happy moment becomes a memory, it becomes a treasure.
img: assets/img/8.jpg
importance: 2
category: life

---

{% for image in site.static_files %}
    {% if image.path contains 'assets/img/project/graduation' %}
        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
    {% endif %}
{% endfor %}