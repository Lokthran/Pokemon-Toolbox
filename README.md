# Pokémon Toolbox
Die Box kann direkt über: https://lokthran.github.io/Pokemon-Toolbox/ aufgerufen werden! Alles läuft lokal!

NEU: CHAMPIONS-Schadensrechern BETA -> Ich habe auf Basis von Showdown einen deutschsprachigen Rechner für Pokemon-Champions integriert. 


Clientseitige Pokémon-Toolbox mit mehreren eigenständigen Modulen:

- Living-Dex-Tracker
- Typen-Rechner
- Typen-Quiz
- Champions-Schadensrechner (eigener Unterordner `champions/`) [file:268][file:295]

---

## Projektstruktur

- `/index.html`  
  Zentrale Toolbox mit Tabs für Living-Dex, Typen-Rechner, Typen-Quiz und einem Link in den Champions-Rechner. [file:268]
- `/data/*.js` bzw. `pokemon-*.js`  
  Datenquellen für Pokédex, Typen, Stats und Formen. [file:250][file:253]
- `/champions/index.html` + zugehörige Assets  
  Vollständiger Schadensrechner („Pokémon Champions Schadensrechner“). [file:295]

---

## Module in der Toolbox (`index.html`)

### Living-Dex

- Darstellung aller sammelbaren Pokémon (inkl. Form-Logik wie Alola/Galar/Hisui/Paldea). [file:268]
- Markierung pro Pokémon: **Normal** und **Shiny** (Checkboxen). [file:268]
- Filter: Generation, Form, Status (gefangen/shiny/fehlend) und Name. [file:268]
- Fortschrittsanzeige mit Prozentbalken für Normal- und Shiny-Living-Dex. [file:268]
- Export/Import der eigenen Markierungen als Code (Local Storage). [file:268]

### Typen-Rechner

- Auswahl von bis zu zwei Typen für defensive und offensive Analyse. [file:264]
- Ausgabe nach Effektivitätsstufen (z. B. ×4, ×2, ×0,5, Immunität) in Gruppen. [file:264]
- „Klickbarer Pokédex“: Pokémon wählen, um deren Typen und Basiswerte zu sehen und direkt in die Analyse zu übernehmen. [file:264]
- Stat-Anzeige mit Balken (KP, Angriff, Verteidigung, Spezialwerte, Initiative, Gesamt). [file:264]

### Typen-Quiz

- Mehrere Schwierigkeitsstufen (Offensiv/Defensiv I–III). [file:268]
- Fragetypen: reine Typenfragen sowie Pokémon-spezifische Schwächen/Resistenzen. [file:268]
- Auswahl von Antwort-Typen über Typ-Badges mit Hervorhebung der richtigen Antworten. [file:268]
- Score-/Highscore-System pro Schwierigkeitsgrad (Local Storage). [file:268]
- Buttons für „Antworten“, „Nächste Frage“ und „Quiz abbrechen“. [file:268]

---

## Champions-Schadensrechner (`champions/index.html`)

Der Champions-Schadensrechner ist ein eigenständiger, vollwertiger Damage-Calculator für Pokémon-Kämpfe. [file:295]

### Kernfunktionen

- **Angreifer / Verteidiger**
  - Auswahl von Pokémon inkl. Formen, Typen und Basiswerten. [file:295]
  - Level, EVs, IVs, Wesen, Status, Boosts (Stufen) und Tera-/Mega-/Form-Spezifika. [file:295]

- **Moves**
  - Auswahl von Attacken mit Kategorie (physisch/spezial), Basisstärke, Typ und Mehrfachtreffern. [file:295]
  - Unterstützung von Spezialfällen wie Flail/Verzweifler, Natur-Kraft, Wetterball, Gyroball etc. [file:295]

- **Feld & Bedingungen**
  - Wetter (Sonne, Regen, Sand, Hail/Snow, spezielle G-Max-Effekte). [file:295]
  - Terrains (Electric, Grassy, Misty, Psychic) inkl. Grounded-Logik. [file:295]
  - Screens, Aurora Veil, Reflect/Light Screen, Friend Guard, Wonder Room usw. [file:295]
  - Side-Conditions wie Seed-Effekte, Trapping, Leech Seed, Sea of Fire, Vine Lash, Wildfire, Cannonade, Volcalith. [file:295]

- **Items & Fähigkeiten**
  - Umfassende Unterstützung von Items (z. B. Life Orb, Choice, Berries, Gems, Leftovers, Black Sludge, Sticky Barb etc.). [file:295]
  - Fähigkeiten wie Intimidate, Flash Fire, Thick Fat, Guts, Huge Power, Filter/Solid Rock, Levitate, Sap Sipper, Wonder Guard, Poison Heal, Magic Guard u. v. m. [file:295]

- **Schadensberechnung**
  - Damage-Range (Min/Max) in Rohwerten und Prozent. [file:295]
  - STAB, Effektivität, Resistenz und Immunität je Typ-Kombination. [file:295]
  - Multi-Hit-Berechnungen (z. B. Triple Kick, Parental Bond). [file:295]
  - Berücksichtigung von Krits, Burn-Malus, Wetter-/Terrain-Boni etc. [file:295]

- **Folgeschaden & Heilung**
  - Residualschaden: Gift/Toxic, Verbrennung, Sandsturm, Hagel/Snow, Leech Seed, Seeds, G-Max-Folgeschaden. [file:295]
  - Heilung: Leftovers, Black Sludge, Grassy Terrain, Regen/Hail/Snow-Effekte, Poison Heal, Wish-artige Effekte. [file:295]

- **Ausgabe / Analyse**
  - Textbeschreibungen des Kampfkontexts (Wetter, Terrain, Crit, Screens, Items, Fähigkeiten). [file:295]
  - KO-Chance-Berechnung (z. B. 2HKO, 3HKO) anhand der Schadensverteilung und Rest-KP. [file:295]
  - Multi-Hit-Schadensverteilungen. [file:295]

---

## Speicherung & Datenschutz

- Fortschritt im Living-Dex sowie Quiz-Highscores werden im **Local Storage** des Browsers gespeichert und bleiben lokal auf dem Gerät. [file:264]
- Es existiert eine separate, textbasierte Datenschutzerklärung innerhalb der Toolbox. [file:264]

---

## Nutzung

1. Projekt lokal entpacken.
2. `index.html` im Browser öffnen, um die Toolbox zu starten. [file:268]
3. Für detaillierte Schadensberechnung optional `champions/index.html` direkt öffnen oder den „Champions-Rechner“-Button in der Toolbox nutzen. [file:268][file:295]
