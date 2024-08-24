---
layout: about
title: about
permalink: /
# description: <a href="#">Affiliations</a>. Address. Contacts. Moto. Etc.

profile:
  align: right
  image: prof_pic.jpg
  # <!-- address: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p> -->

# <<<<<<< HEAD
news: true  # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
order: 1
# =======
# news: true
# social: true

# >>>>>>> first new commit to site
---

I am a fifth-year Ph.D. candidate in Computing and Mathematical Sciences at Caltech. My research focuses broadly on online algorithms and decision-making under uncertainty, with a particular focus on developing new algorithms to enable deploying modern AI/ML tools reliably and safely to real-world problems in energy and sustainability.

In my work, I have developed [optimal algorithms](https://proceedings.mlr.press/v206/christianson23a.html) for leveraging black-box AI advice in online optimization while ensuring provable, worst-case performance guarantees. I have also studied how to design such "learning-augmented" algorithms in a variety of more [general](https://dl.acm.org/doi/abs/10.1145/3673660.3655074), [constrained](https://openreview.net/forum?id=hRBdOHVn7y) [online problems](https://arxiv.org/abs/2408.07831). Recently, I've been particularly interested in how to design better online algorithms when provided [uncertainty quantification](https://openreview.net/forum?id=xF656w37Mj) and faced with [risk sensitivity](https://proceedings.mlr.press/v247/christianson24a/christianson24a.pdf), which are crucial considerations in domains such as [electricity markets](https://ieeexplore.ieee.org/abstract/document/10384022) with high renewables penetration.

While much of my research is theoretical in focus, I am deeply invested in translating theoretical insights to practical impact. During my Ph.D., I have collaborated with [Beyond Limits](https://www.beyond.ai/) on applying learning-augmented algorithms to improve [cogeneration management](https://www.climatechange.ai/papers/neurips2022/19) in high-renewables grids, and I led the implementation of their cogeneration system model in the open-source RL benchmark suite [Sustaingym](https://openreview.net/forum?id=vZ9tA3o3hr). I have also collaborated with Amazon Prime Video on developing and deploying [new algorithms for adaptive bitrate streaming](https://www.amazon.science/publications/soda-an-adaptive-bitrate-controller-for-consistent-high-quality-video-streaming).

At Caltech, I am fortunate to be advised by [Adam Wierman](https://adamwierman.com/) and [Steven Low](http://netlab.caltech.edu/people). Previously, I received an A.B. in applied mathematics from Harvard, where I worked with [Boris Kozinsky](https://mir.g.harvard.edu/people/boris-kozinsky) on ionic transport, and with [Dani S. Bassett](https://complexsystemsupenn.com/personal) (UPenn) on network science.


**Check out some of our recent collaboration/deployment work:**
<div class="side-by-side-previews">
{% include link_preview.html
    url="https://www.amazon.science/publications/soda-an-adaptive-bitrate-controller-for-consistent-high-quality-video-streaming"
    image="assets/img/amazon_science.png"
    title="SODA: An Adaptive Bitrate Controller for Consistent High-Quality Video Streaming"
%}

{% include link_preview.html
    url="https://chrisyeh96.github.io/sustaingym/"
    image="assets/img/logo.png"
    title="SustainGym: An RL Benchmark Suite for Sustainable Energy Systems"
%}
</div>
