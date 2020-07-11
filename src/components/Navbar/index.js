import React from "react";
import ClienteNav from "./ClienteNav";
import AdmNav from "./AdmNav";

export default function NavBar() {
  return localStorage.isAdmin === "true" ? <AdmNav /> : <ClienteNav />;
}
