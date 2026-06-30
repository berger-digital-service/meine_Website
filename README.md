# Berger Digital Service

Next.js 14 (App Router) + Tailwind CSS + GSAP/ScrollTrigger.

## Setup

```bash
npm install
npm run dev
```

Dann im Browser `http://localhost:3000` öffnen.

## Struktur

- `app/layout.tsx` – Root-Layout, bindet die drei Schriftfamilien über `next/font` ein (Space Grotesk, IBM Plex Sans, IBM Plex Mono)
- `app/page.tsx` – Setzt alle Sections zusammen
- `components/Header.tsx` – Sticky Nav mit Scroll-State
- `components/Hero.tsx` + `components/NetworkCanvas.tsx` – Hero-Bereich mit animiertem Knotennetz (Canvas, reagiert auf Mausbewegung)
- `components/Stats.tsx` – Kennzahlen mit GSAP-Counter-Animation
- `components/Services.tsx` – Leistungs-Kacheln mit Unsplash-Bildern (Hover-Zoom)
- `components/About.tsx` – "Über mich"-Sektion mit Bild, betont den Einzelunternehmer-Charakter
- `components/WhyUs.tsx` – Drei Argumente in Ich-Perspektive
- `components/CtaBanner.tsx` – Bild-CTA-Banner kurz vor dem Kontaktbereich
- `components/Reveal.tsx` – Wiederverwendbarer Wrapper für GSAP-ScrollTrigger-Einblendungen
- `components/Contact.tsx` – Kontaktformular (aktuell nur clientseitig, kein echter Versand)

## Kontaktformular einrichten (E-Mail-Versand)

Das Formular sendet über eine eigene API-Route (`app/api/contact/route.ts`)
mit [Resend](https://resend.com) an `john-berger@t-online.de`. So aktivierst
du den Versand:

1. Kostenloses Konto auf [resend.com](https://resend.com) anlegen — **am besten direkt mit `john-berger@t-online.de` registrieren**, dann funktioniert der Test-Versand sofort an diese Adresse.
2. Im Resend-Dashboard unter "API Keys" einen neuen Key erstellen.
3. Im Projektordner die Datei `.env.local.example` zu `.env.local` kopieren und den Key eintragen:
   ```
   RESEND_API_KEY=re_dein_echter_key
   ```
4. `npm run dev` neu starten, damit die Umgebungsvariable geladen wird.

Ohne eigene verifizierte Domain läuft der Versand über die Resend-Testadresse
`onboarding@resend.dev` und funktioniert zuverlässig nur an die E-Mail-Adresse,
mit der du dich bei Resend registriert hast. Für den produktiven Einsatz mit
eigener Domain (z. B. `kontakt@berger-digital.de`) muss diese Domain im
Resend-Dashboard verifiziert werden (DNS-Einträge), danach kannst du die
`from`-Adresse in `app/api/contact/route.ts` entsprechend anpassen.

Beim Deployment (z. B. auf Vercel) muss `RESEND_API_KEY` zusätzlich als
Umgebungsvariable im Hosting-Dashboard hinterlegt werden, `.env.local` wird
nicht mit hochgeladen.

## Bilder

Alle Bilder stammen von [Unsplash](https://unsplash.com) und stehen unter der
[Unsplash-Lizenz](https://unsplash.com/license): kostenlos nutzbar, auch
kommerziell, ohne Namensnennung erforderlich. Eingebunden über `next/image`
mit `images.unsplash.com` als erlaubter Domain in `next.config.js`.

## Nächste Schritte

- Kontaktformular an einen Endpoint anbinden (z. B. Resend, Formspree oder eine eigene API-Route unter `app/api/contact/route.ts`)
- Bilder bei Bedarf durch eigene Fotos ersetzen (z. B. echte Aufnahmen vom eigenen Arbeitsplatz oder von Kundenstandorten)
- Standort in `components/Contact.tsx` prüfen und ggf. anpassen
- Vor dem Launch: Lighthouse-Audit in Chrome DevTools für Core Web Vitals

