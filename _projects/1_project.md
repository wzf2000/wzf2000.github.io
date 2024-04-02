---
layout: page
title: MACRec
description: A multi-agent collaborative framework for recommender systems
img: assets/img/MACRec.jpg
importance: 1
category: work
related_publications: true
---

LLM-based agents have gained considerable attention for their decision-making skills and ability to handle complex tasks. There are various complex decision-making tasks in recommendation scenarios, so some previous studies have tried to use agents in this scenario. However, existing work focuses on using agents for user/item simulation, ignoring the multi-agent collaboration ability for recommendation. In this paper, we introduce MACRec {% cite wang2024multi %}, a novel framework designed to enhance recommendation systems through multi-agent collaboration, to deploy multi-agents for various recommendation tasks directly. In our framework, recommendation tasks are addressed through the collaborative efforts of various specialized agents, including Manager, User/Item Analyst, Reflector, Searcher, and Task Interpreter, with different working flows. Furthermore, we provide application examples of how developers can easily use MACRec on various recommendation tasks, including rating prediction, sequential recommendation, conversational recommendation, and explanation generation of recommendation results. The framework and demonstration video are publicly available at [https://github.com/wzf2000/MACRec](https://github.com/wzf2000/MACRec).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MACRec.jpg" title="framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The overall architecture of MACRec.
</div>
