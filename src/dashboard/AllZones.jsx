import { useEffect, useState } from "react";
import axios from "axios";

function AllZones() {
  console.log("Rendering AllZones component");

  const [zones, setZones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect called to fetch zones");

    const fetchZones = async () => {
      console.log("Attempting to fetch zones...");
      const API_TOKEN = import.meta.env.VITE_API_TOKEN;

      try {
        const response = await axios.get(
          "https://dns.hetzner.com/api/v1/zones",
          {
            headers: {
              "Auth-API-Token": API_TOKEN,
            },
          }
        );

        console.log("Zones fetched successfully:", response.data.zones);
        setZones(response.data.zones);
      } catch (err) {
        console.error("Error fetching zones:", err);
        setError("Failed to load zones. Check API Token or network.");
      }
    };

    fetchZones();
  }, []);

  return (
    <div className="all-zones-container">
      <h2>All Zones</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {zones.map((zone) => (
            <li key={zone.id}>{zone.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllZones;
