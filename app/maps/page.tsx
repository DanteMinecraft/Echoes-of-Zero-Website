import Navbar from "@/components/Navbar";
import MapContainer from "@/components/MapContainer";
import Footer from "@/components/Footer";

import stylesFullSection from "@/components/FullSection.module.css";

export default function Maps() {
  return (
    <>
      <div className={stylesFullSection.FullSection}>
        <Navbar />
        <MapContainer />
        <Footer />
      </div>
    </>
  );
}