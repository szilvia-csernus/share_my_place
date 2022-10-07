import { Feature, Map, View } from 'ol/index';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Point } from 'ol/geom';
import { OSM, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';


export default class MapComponent {
	constructor(coords) {
		// this.coords = coords;
		this.render(coords);
	}

	render(coordinates) {
		document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">

		const place = fromLonLat([coordinates.lng, coordinates.lat]);
		const point = new Point(place);

		const map = new Map({
			target: 'map',
			layers: [
				new TileLayer({
					source: new OSM(),
				}),
				new VectorLayer({
					source: new VectorSource({
						features: [new Feature(point)],
					}),
					style: {
						'circle-radius': 9,
						'circle-fill-color': 'red',
					},
				}),
			],
			view: new View({
				center: fromLonLat([coordinates.lng, coordinates.lat]),
				zoom: 16,
			}),
		});
		console.log(map)
	}
}
