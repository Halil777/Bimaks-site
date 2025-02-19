import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Dashboard: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // SWR hooks to fetch visitor count
  const { data: visitorData, error } = useSWR(
    "https://bimakstm.com/visitor/api/visitor-count",
    fetcher
  );

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdmin(token === "bimaksAdminToken");

    // Increment visitor count if not admin
    if (!isAdmin) {
      fetch("https://bimakstm.com/visitor/api/visitor-count", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          // Trigger a revalidation of the visitor count
          mutate("https://bimakstm.com/visitor/api/visitor-count");
        })
        .catch((error) =>
          console.error("Error incrementing visitor count:", error)
        );
    }
  }, [isAdmin]);

  if (error) return <div>Failed to load visitor count</div>;
  if (!visitorData) return <div>Loading...</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Visitor Count</h2>
        <p className="text-lg mt-2">{visitorData.count}</p>
      </div>
    </div>
  );
};

export default Dashboard;
