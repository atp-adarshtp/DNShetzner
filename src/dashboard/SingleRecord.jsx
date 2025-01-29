import { useEffect, useState } from "react";
import axios from "axios";

function SingleRecord({ recordId }) {
  console.log("Rendering SingleRecord component for ID:", recordId);

  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching record with ID: ${recordId}`);

    const fetchRecord = async () => {
      console.log("Attempting to fetch single record...");
      const API_TOKEN = import.meta.env.VITE_API_TOKEN;

      try {
        const response = await axios.get(
          `https://dns.hetzner.com/api/v1/records/${recordId}`,
          {
            headers: {
              "Auth-API-Token": API_TOKEN,
            },
          }
        );

        console.log("Record fetched successfully:", response.data.record);
        setRecord(response.data.record);
      } catch (err) {
        console.error("Error fetching record:", err);
        setError("Failed to load record. Check API Token or network.");
      }
    };

    fetchRecord();
  }, [recordId]);

  return (
    <div className="single-record-container">
      <h2>Single DNS Record</h2>
      {error ? (
        <p>{error}</p>
      ) : record ? (
        <div>
          <p><strong>Name:</strong> {record.name}</p>
          <p><strong>Type:</strong> {record.type}</p>
          <p><strong>Value:</strong> {record.value}</p>
          <p><strong>TTL:</strong> {record.ttl}</p>
        </div>
      ) : (
        <p>Loading record...</p>
      )}
    </div>
  );
}

export default SingleRecord;
