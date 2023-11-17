import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigation } from "react-router-dom";
import "./../../assets/css/loading.css";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { state: stateNavigate } = useNavigation();
  const loading = stateNavigate === "loading";

  return (
    <div className="container-crud">
      <Header />
      <main className={`${loading ? "loadingLayout" : ""}`}>
        <div
          style={{
            position: "absolute",
            width: window.innerWidth,
            height: "100vh",
            zIndex: 100,
            display: loading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={`loadingIcon ${loading ? "active" : ""}`} />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
