import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkersImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

const mapIcon = Leaflet.icon({
	iconUrl: mapMarkersImg,

	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

function OrphanagesMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkersImg} alt="Happy" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esoerando a sua visita :)</p>
				</header>

				<footer>
					<strong>Maringá</strong>
					<span>Paraná</span>
				</footer>
			</aside>

			<Map
				center={[-23.449361, -51.9474355]}
				zoom={15}
				style={{ width: "100%", height: "100%" }}
			>
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>
				<Marker icon={mapIcon} position={[-23.449361, -51.9474355]}>
					<Popup
						closeButton={false}
						minWidth={240}
						maxWidth={240}
						className="map-popup"
					>
						<Link to="">
							<FiArrowRight size={20} color="#FFF" />
						</Link>
					</Popup>
				</Marker>
			</Map>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
}
export default OrphanagesMap;
