# Glattwerk Beauty — Website-Prototyp

Design-Prototyp für die neue Website von **Glattwerk Beauty** (Corina Blasi, Industriestrasse 173a, 8957 Spreitenbach) als Vorstufe zur Shopify-Umsetzung.

**Live-Vorschau:** https://leitung-gif.github.io/glattwerk-website/

## Inhalt

| Pfad | Zweck |
|---|---|
| `index.html` | Kompletter Prototyp, eine Datei, Bilder eingebettet. 7 Seiten über Hash-Navigation (Home, Über mich, Haarentfernung, Kosmetik, Make-up & Styling, Vorher/Nachher, Kontakt) |
| `assets/fotos/` | Original-Bildmaterial der bisherigen Canva-Site (weboptimiert, max. 900 px) |
| `assets/preislisten-original/` | Die vier Preislisten-Grafiken der alten Site als Referenz — alle Preise sind im Prototyp bereits als HTML-Tabellen umgesetzt |
| `theme/` | **Shopify-Theme «Glattwerk Champagne»** (Online Store 2.0) — 1:1-Übersetzung des Prototyps in Sections mit Customizer-Settings. `shopify theme check`: 0 Errors |

## Shopify-Deployment (sobald der Dev-Store existiert)

```bash
cd theme
shopify theme dev --store <dev-store>.myshopify.com     # Live-Vorschau
shopify theme push --store <dev-store>.myshopify.com    # Hochladen
```

Danach im Admin:
1. **Seiten anlegen** mit diesen Handles (Theme-Vorlage im Seiten-Editor auswählen): `haarentfernung`, `kosmetik`, `make-up-styling`, `ueber-mich`, `vorher-nachher`, `kontakt`, `faq`
2. **Menü `main-menu`** mit Dropdown-Struktur befüllen (Unterpunkte werden automatisch zum Aufklapp-Menü):
   - Behandlungen (Link auf Haarentfernung) → darunter: Haarentfernung, Kosmetik, Make-up & Styling
   - Vorher / Nachher · Über mich · Journal (Blog) · FAQ · Kontakt
   - Footer-Menü `footer` flach analog
3. **Blog:** Standard-Blog «News» in «Journal» umbenennen (oder neuen Blog `journal` anlegen). Die drei Startartikel liegen fertig in `content/blog/` — Titel, Tag und Text einfach übernehmen, je ein Studio-Foto als Beitragsbild
4. **SEO ist eingebaut:** Meta-Descriptions (Standardtext in den Theme-Settings, pro Seite im Admin überschreibbar), Open-Graph-Tags, LocalBusiness-Schema (BeautySalon mit Adresse/Koordinaten — exakte Koordinaten in den Theme-Settings nachtragen), FAQPage-Schema auf der FAQ-Seite, Article-Schema auf Blogbeiträgen. Nach Livegang: Google Business Profile verknüpfen und Sitemap (`/sitemap.xml`) in der Search Console einreichen
3. Bilder sind als Theme-Assets mitgeliefert (Fallbacks) — für den produktiven Betrieb im Customizer echte Bilder über die Bild-Wähler setzen
4. Kontaktformular nutzt das native Shopify-Kontaktformular (Mails gehen an die Store-Absenderadresse)
5. Preise, Texte, Farben, Kontaktdaten: alles im Customizer editierbar (Theme-Settings → Markenfarben / Kontakt & Studio)

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
