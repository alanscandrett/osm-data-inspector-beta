# OSM Visualiser

This is a basic spatial viewer for Open Street Map (OSM) data.

Note: _The Overpass API isn't lightning fast, so it may take a short time for the building footprints to appear after running a query_.

[Click here to view the live application](https://alanscandrett.github.io/osm-data-inspector-beta/dist/)

![Demonstration GIF](https://i.imgur.com/eHDukCV.gif)

## Features

* Interactive map
* Spatial Data
  * OSM Overpass data streaming
  * [TODO] Additional Vector data
* Draw tools
  * Query via drawn shape
* [TODO] Charting of queried data

## Software Stack

* [Leaflet.js](https://leafletjs.com/)
  * [Leaflet-Draw](https://github.com/geoman-io/leaflet-geoman)
* [Turf.js](https://turfjs.org/)
* [Vue.js](https://github.com/vue-leaflet/Vue2Leaflet)
* [Chart.js](https://github.com/apexcharts/vue-apexcharts)
