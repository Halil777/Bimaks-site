import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import { About, Home, Products } from "../../../pages";
import { Suspense } from "react";
import FirstComponent from "../../home/first/FirstComponent";
import FirstItem from "../../home/first/FirstItem";
import Contact from "../../../pages/contact/Contact";
import ProductList from "../../../pages/products/ProductList";
import ProductFullInfo from "../../../pages/products/ProductFullInfo";
import TechnicalSolutions from "../../../pages/solutions/TechnicalSolutions";
import "../../../assets/css/index.css";
import Login from "../../../admin/Login";
import Dashboard from "../../../admin/Dashboard";

// Fetcher function for SWR
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const RouteList: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // SWR hooks to fetch visitor count
  const { data: visitorData, error } = useSWR(
    "https://bimakstm.com/visitor/api/visitor-count",
    fetcher
  );

  useEffect(() => {
    // Check if the user is an admin
    const token = localStorage.getItem("adminToken");
    setIsAdmin(token === "bimaksAdminToken");

    // Increment visitor count
    if (!isAdmin) {
      axios
        .post(
          "https://bimakstm.com/visitor/api/visitor-count",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
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
    <BrowserRouter>
      <Suspense fallback={"LOADING..."}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/first" element={<FirstComponent />} />
            <Route
              path="/technical-solutions"
              element={<TechnicalSolutions />}
            />
            <Route path="/firstCom" element={<FirstItem />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:groupId" element={<ProductList />} />
            <Route path="/product-info/:id" element={<ProductFullInfo />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteList;
