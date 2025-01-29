import { useEffect, useState } from "react";
import axios from "axios";

function AllRecords() {
  console.log("Rendering AllRecords component");

  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect called to fetch records");

    const fetchRecords = async () => {
      console.log("Attempting to fetch records...");
      const API_TOKEN = import.meta.env.VITE_API_TOKEN;

      try {
        const response = await axios.get(
          "https://dns.hetzner.com/api/v1/records?zone_id=Luyax6NKumYm6XceSGKu3R",
          {
            headers: {
              "Auth-API-Token": API_TOKEN,
            },
          }
        );

        console.log("Records fetched successfully:", response.data.records);
        setRecords(response.data.records);
      } catch (err) {
        console.error("Error fetching records:", err);
        setError("Failed to load records. Check API Token or network.");
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="all-records-container">
      <h2>DNS Records</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              {record.name} - {record.type} - {record.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllRecords;
