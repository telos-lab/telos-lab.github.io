---
title: Projects
nav:
  order: 1
  # tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-compass-drafting fa-fw" %}Projects

## Main Themes

Our main research themes combine all three pillars of our lab slogan: law, technology, and society.

<!-- Modeling -->
{% capture text %}
In our flagship project *CompLex: Toward a Computational Theory of Legal Complexity*,
we combine our expertise in foundations of law with concepts and methods from computer science and network science,
aiming to develop a computational theory of legal systems.

This work is funded by an ERC Starting Grant 2025 (2026–2030).

_Main elements:_ foundations of law, network science, theoretical computer science.
{% endcapture %}

{%
include feature.html
link="https://cordis.europa.eu/project/id/101221337"
image="images/projects/complex-overview.svg"
title="Computational Legal Theory"
text=text
%}

<!-- Measuring -->
{% capture text %}
We collect, preprocess, and analyze multimodal legal and political data to answer domain-specific research questions. 
To ensure construct validity, we often develop our own data-analysis methods, guided by the research question at hand.
We also create and publish high-quality collections of legal data and political data, 
following best practices in software engineering, data engineering, and FAIR resource sharing. 


_Main elements:_ foundations of law, network science, machine learning.
{% endcapture %}

{%
include feature.html
image="images/projects/bverfge_model.svg"
title="Legal and Political Data Science"
text=text
flip=true
%}


<!-- Mapping -->
{% capture text %}
Legal documents contain not only _sequences_ of _text_ 
but also elaborate hierarchical _structure_ as well as explicit and implicit _references_ to other documents. 
The information contained in legal documents can be better understood and more efficiently navigated via _visualization_ and _interaction_: 
We create artistic visualizations that allow laypeople and professionals alike to intuitively appreciate the complexity of the law,
and we leverage visual elements interaction design to build user interfaces that better support various stakeholders with their legal tasks. 


_Main elements:_ foundations of law, network science, human-computer interaction.
{% endcapture %}

{%
include feature.html
link="art"
image="images/projects/bgb_radial_bundled_darklight.webp"
title="Legal Data Visualization and Data Art"
text=text
%}

## Side Quests

We regularly pursue side quests in all research areas fused by the lab, 
publishing the results in the relevant specialized communities. 
This usually happens as a result of curiosity and serendipity, and it expands our horizon. 
Here is a sample of side quests that have very little to do with law:

- _network science:_ concepts, methods, and software for highly expressive network models (ICLR 2023, DSH 2024, JOSS 2024)
- _machine learning:_ mathematically grounded methods for rigorous evaluations of ML models and methods (ICML 2024, ICML 2025)
- _theoretical computer science:_ distributed (quantum) computing (SOSA 2021, 2x DISC 2025)
- _human-computer interaction:_ relational configurations in research work with anthropomorphic conversational agents (CHI 2026)