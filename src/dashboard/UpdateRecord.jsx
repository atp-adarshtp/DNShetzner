import { useState } from "react";
import axios from "axios";

function UpdateRecord({ recordId }) {
  console.log("Rendering UpdateRecord component for ID:", recordId);

  const [newValue, setNewValue] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

    try {
      const response = await axios.put(
        `https://dns.hetzner.com/api/v1/records/${recordId}`,
        {
          zone_id: "Luyax6NKumYm6XceSGKu3R",
          type: "A",
          name: "@",
          value: newValue,
          ttl: 0,
        },
        {
          headers: {
            "Auth-API-Token": API_TOKEN,
          },
        }
      );
      setMessage("Record updated successfully!");
      console.log(response.data);
    } catch (err) {
      setMessage("Error updating record.");
      console.error("Error updating record:", err);
    }
  };

  return (
    <div className="update-record-container">
      <h2>Update DNS Record</h2>
      <input
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        placeholder="Enter new value"
      />
      <button onClick={handleUpdate}>Update Record</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateRecord;