---
title: Team
nav:
  order: 4
  # tooltip: Lab Members
---

# {% include icon.html icon="fa-solid fa-users fa-fw" %}Team

Our members hail from a variety of backgrounds across formal, natural, and social sciences as well as arts and humanities. 
While many of our core team members have some background in law, this is not a requirement for joining the lab. 
For more information on joining us, see [here](/philosophy/#joining-the-lab).

## Core Team

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator' && group == 'core' && !hide" %}
{% include list.html data="members" component="portrait" filter="role == 'phd' && group == 'core' && !hide" %}
{% include list.html data="members" component="portrait" filter="role == 'ra' && group == 'core' && !hide" %}

## Trusted Collaborators
{% include list.html data="members" component="portrait" filter="group == 'collaborator' && !hide" %}

## Affiliates
{% include list.html data="members" component="portrait" filter="group == 'affiliate' && !hide" %}

## Alumni

{% include list.html data="members" component="portrait" filter="group == 'alum' && !hide" %}