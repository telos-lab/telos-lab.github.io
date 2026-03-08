---
title: Verwaltungsgericht Berlin
subtitle: Exhibition at the Administrative Court Berlin
link: art/vg-berlin
image: images/art/asylg_2025.webp
hide: false
description: "We bring data art made from German legislation into the hallways of Berlin's administrative court. (Exhibition description in German.)"
---

# {% include icon.html icon="fa-solid fa-balance-scale fa-fw" %}Verwaltungsgericht Berlin

## Beschreibung der Ausstellung

### Wie sieht Recht aus? 

Das ist keine Frage, die das VG Berlin im Alltag beantworten muss. 
Allerdings bietet Visualisierung eine Möglichkeit, die Komplexität des Stoffes, mit dem sich das Gericht regelmäßig befasst, intuitiv erfahrbar zu machen. 
Das ist das Ziel dieser Ausstellung.

### Wie wurden die Bilder ausgewählt?

Die ausgewählten Bilder zeigen einige der Rechtsquellen, die für das VG Berlin besonders relevant sind: 
Das Grundgesetz als Basis aller Rechtsprechung, das Asyl(verfahrens)gesetz in seiner Entwicklung von den achtziger Jahren bis heute, das Aufenthaltsgesetz mit seiner Beziehung zur Aufenthaltsverordnung und das Gemeinsame Europäische Asylsystem (GEAS).

### Wie werden die Bilder erstellt?

Die Bilder werden aus den Texten der Rechtsquellen algorithmisch erstellt. Dabei kommen drei verschiedene Darstellungsformen zum Einsatz.
1. _Grundgesetz und Asyl(verfahrens)gesetz in mehreren Fassungen._  
   Hier wird die Gliederung des Gesetzes als (umgedrehter) Baum dargestellt und explizite Verweise zwischen Teilen des Gesetzes werden in Bögen übersetzt.
2. _Aufenthaltsgesetz und Aufenthaltsverordnung._  
   Hier kommt für jede einzelne Rechtsquelle die Baumdarstellung zu 1. zum Einsatz. Zusätzlich werden die Verweise von der Verordnung auf das Gesetz als Linien dargestellt, welche die einzelnen Bäume verbinden.
3. _Gemeinsames Europäisches Asylsystem (GEAS)._  
   Hier wird jede Verordnung, die zum GEAS gehört, als Punkt dargestellt, dessen Größe proportional zur Länge des Verordnungstextes ist. Verweise, die zwischen den einzelnen Verordnungen verlaufen, sind als Fäden dargestellt, deren Farbe der Farbe ihrer Ursprungsverordnung entspricht.

### Wer steckt hinter der Ausstellung?

Die Bilder dieser Ausstellung wurden vom _Telos Lab_ für das VG Berlin erstellt.
Das _Telos Lab_ ist eine Forschungsgruppe, die das Recht aus der Perspektive der Informatik untersucht. 
Sie wird von Professor Dr. Dr. Corinna Coupette geleitet.
Die Darstellungsformen, die der Ausstellung zugrunde liegen, sind aus der wissenschaftlichen Arbeit der Gruppe hervorgegangen.
Weitere Informationen über das _Telos Lab_ finden sich [hier](/) auf der Homepage des Labs.


## Einzelne Kunstwerke

{% include list.html data="vg-berlin" component="card" filter="title == 'Grundgesetz'"%}

{% include list.html data="vg-berlin" component="card" filter="title == 'Gem. Europäisches Asylsystem'"%}

{% include list.html data="vg-berlin" component="card" filter="title == 'Aufenthaltsgesetz und -verordnung'"%}

{% include list.html data="vg-berlin" component="card" filter="title != 'Grundgesetz' && title != 'Gem. Europäisches Asylsystem' && title != 'Aufenthaltsgesetz und -verordnung' && title != 'Asylgesetz 2025'" %}

{% include list.html data="vg-berlin" component="card" filter="title == 'Asylgesetz 2025'"%}