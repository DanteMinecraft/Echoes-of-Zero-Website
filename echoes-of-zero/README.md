# Echoes of Zero Website

Official website for the **Echoes of Zero UEFN** project.

This site serves as the central hub for the Echoes of Zero universe, including development updates, story information, and the legacy history of the Island Zero maps.

The website is built using a headless CMS architecture, where WordPress manages the content while a custom Next.js frontend renders the website.

# Features

- Custom news system powered by WordPress REST API
- Dynamic blog posts rendered through **Next.js App Router**
- Dedicated pages for **story, legacy maps, and project updates**
- Responsive design optimized for modern displays
- Fully custom UI (*no WordPress themes*)

# Tech Stack

## Frontend:

- Next.js
- React
- TypeScript
- CSS Modules

## Content Management:

- WordPress (*Headless CMS*)
- WordPress REST API

## Infrastructure:

Self-hosted environment using Linux containers

Reverse proxy routing through Nginx

# Project Structure
```app/
 ├ page.tsx                 # Landing page
 ├ news/
 │   ├ page.tsx             # News listing
 │   └ [slug]/page.tsx      # Dynamic blog posts
 ├ story/page.tsx           # Story overview
 ├ island-zero/
 │   ├ page.tsx             # Legacy Island Zero info
 │   └ inbetween/page.tsx   # Inbetween remaster page
```
Content is fetched dynamically from the WordPress API:

https://wpa.echoesofzero.net/wp-json/wp/v2/posts

# Development

Install dependencies:

`npm install`

Run the development server:

`npm run dev`

The site will be available at:

`http://localhost:3000`

# Content Management

All news articles and updates are written in WordPress and automatically appear on the website through the **REST API**.

The site frontend simply fetches and renders the content dynamically.

# About Echoes of Zero

**Echoes of Zero** is an ongoing creative project centered around UEFN (Fortnite) maps with environmental storytelling and a connected universe of locations.

The project builds upon the legacy of the original **Island Zero** maps while expanding the world through new environments and narrative elements.

# License

This project is intended for personal and creative use as part of the Echoes of Zero project.

# Author

Created by **DanteMC**