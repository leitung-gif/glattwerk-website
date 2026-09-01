# Glattwerk Beauty — Website-Prototyp

Design-Prototyp für die neue Website von **Glattwerk Beauty** (Corina Blasi, Industriestrasse 173a, 8957 Spreitenbach) als Vorstufe zur Shopify-Umsetzung.

**Live-Vorschau:** https://leitung-gif.github.io/glattwerk-website/

## Inhalt

| Pfad | Zweck |
|---|---|
| `index.html` | Kompletter Prototyp, eine Datei, Bilder eingebettet. 7 Seiten über Hash-Navigation (Home, Über mich, Haarentfernung, Kosmetik, Make-up & Styling, Vorher/Nachher, Kontakt) |
| `assets/fotos/` | Original-Bildmaterial der bisherigen Canva-Site (weboptimiert, max. 900 px) |
| `assets/preislisten-original/` | Die vier Preislisten-Grafiken der alten Site als Referenz — alle Preise sind im Prototyp bereits als HTML-Tabellen umgesetzt |

## Shopify-Mapping

Der Prototyp ist als Bauplan für ein Shopify-Theme strukturiert:

- Jede Sektion trägt ein `data-shopify`-Attribut mit dem Namen der künftigen Liquid-Section (z. B. `hero-welcome`, `service-cards`, `price-list-laser`, `aftercare-tips`, `contact`).
- Die Marken-Tokens (Farben, Fonts, Radien) stehen als CSS-Custom-Properties am Dateianfang und werden 1:1 zu Theme-Settings (`settings_schema.json`).
- Das Kontaktformular wird in Shopify durch das native Kontaktformular ersetzt; die WhatsApp-CTAs bleiben.

## Offene Punkte (vor Livegang klären)

- [ ] **Telefonnummer verifizieren:** alte Site nennt 076 349 48 44 (3 Quellen, inkl. WhatsApp-Link) und +41 79 349 48 44 (Kontaktseite). Prototyp nutzt 076.
- [ ] **Vorher/Nachher-Bilder ersetzen:** die Dateien mit Suffix `-STOCK` sind Stockfotos, keine echten Behandlungsergebnisse — für die finale Site echte Resultate von Corina einsetzen (UWG).
- [ ] Öffnungszeiten (aktuell «Nach Vereinbarung»)
- [ ] Domain-Zugang glattwerkbeauty.ch
- [ ] Eigene Rechtsseiten: Impressum, AGB, Datenschutzerklärung (nDSG)
- [ ] Buchungsweg definitiv (WhatsApp vs. Booking-App)
