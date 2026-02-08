import "leaflet/dist/leaflet.css"
import L from "leaflet"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "./App.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const spots = [
  {
    name: "Tokyo Station",
    position: [35.6812, 139.7671] as [number, number],
  },
  {
    name: "Tokyo Tower",
    position: [35.6586, 139.7454] as [number, number],
  },
  {
    name: "Tokyo Skytree",
    position: [35.7101, 139.8107] as [number, number],
  },
  {
    name: "Shibuya Crossing",
    position: [35.6595, 139.7004] as [number, number],
  },
  {
    name: "Senso-ji Temple",
    position: [35.7148, 139.7967] as [number, number],
  },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Leaflet example - Tokyo</h1>
      </header>
      <main className="main">
        <MapContainer
          className="map"
          center={[35.6812, 139.7671]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {spots.map((spot) => (
            <Marker key={spot.name} position={spot.position}>
              <Popup>{spot.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </main>
    </div>
  )
}

export default App
