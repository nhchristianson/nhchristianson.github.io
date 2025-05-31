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

announcements:
  enabled: true
  limit: 5 # leave blank to include all the news in the `_news` folder

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
order: 1
---

I am a fifth-year Ph.D. candidate in Computing and Mathematical Sciences at Caltech, supported by an NSF Graduate Research Fellowship and a PIMCO Data Science Fellowship. My research is broadly concerned with decision-making under uncertainty, with a specific focus on developing new algorithms to enable deploying modern AI/ML tools reliably and safely to real-world problems in energy and sustainability.

In my work, I have developed [optimal algorithms](https://proceedings.mlr.press/v206/christianson23a.html) to leverage black-box AI/ML advice in online optimization while ensuring provable, worst-case performance guarantees. I have also worked on designing such "learning-augmented" algorithms in a variety of more [general](https://dl.acm.org/doi/abs/10.1145/3673660.3655074), [constrained](https://openreview.net/forum?id=hRBdOHVn7y) [problems](https://arxiv.org/abs/2408.07831). Recently, I've been particularly interested in studying how to design better algorithms for [risk-aware](https://proceedings.mlr.press/v247/christianson24a/christianson24a.pdf) decision-making, especially by using [uncertainty quantification](https://openreview.net/forum?id=xF656w37Mj).
<!-- which is a crucial consideration for applications such as high-renewables . -->

Beyond my theoretical work, I am deeply invested in translating theoretical insights to practical, real-world impact, and I have worked on a variety of applications including [electricity markets](https://ieeexplore.ieee.org/abstract/document/10384022) and [carbon-aware datacenter operation](https://dl.acm.org/doi/abs/10.1145/3626776). During my Ph.D., I collaborated with [Beyond Limits](https://www.beyond.ai/) to apply our learning-augmented algorithms to improve [cogeneration management](https://www.climatechange.ai/papers/neurips2022/19) in high-renewables power grids, and I led the implementation of their cogeneration system model in the open-source RL benchmark suite [Sustaingym](https://openreview.net/forum?id=vZ9tA3o3hr). I have also collaborated with Amazon Prime Video on developing and deploying [new, theoretically-grounded algorithms](https://www.amazon.science/publications/soda-an-adaptive-bitrate-controller-for-consistent-high-quality-video-streaming) for adaptive bitrate streaming.

At Caltech, I am fortunate to be advised by [Adam Wierman](https://adamwierman.com/) and [Steven Low](http://netlab.caltech.edu/people). During the summer of 2023, I interned at Microsoft Research Redmond with [Weiwei Yang](https://www.microsoft.com/en-us/research/people/weiwya/) and [Baosen Zhang](https://zhangbaosen.github.io/). Previously, I received an A.B. in applied mathematics from Harvard, where I worked with [Boris Kozinsky](https://mir.g.harvard.edu/people/boris-kozinsky) on ionic transport, and with [Dani S. Bassett](https://complexsystemsupenn.com/personal) (UPenn) on network science.


**Check out some of our recent collaboration/deployment work:**
<div class="side-by-side-previews">
{% include link_preview.liquid
    url="https://www.amazon.science/publications/soda-an-adaptive-bitrate-controller-for-consistent-high-quality-video-streaming"
    image="assets/img/amazon_science.png"
    title="SODA: An Adaptive Bitrate Controller for Consistent High-Quality Video Streaming"
%}

{% include link_preview.liquid
    url="https://chrisyeh96.github.io/sustaingym/"
    image="assets/img/logo.png"
    title="SustainGym: An RL Benchmark Suite for Sustainable Energy Systems"
%}
</div>
