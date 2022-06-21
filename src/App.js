import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Container className="py-2">
        <Routes>
          <Route path="admin" element={<AdminPage />}>
            <Route index element={<LoginPage />} />
            <Route path="matches" element={<div>matches page</div>} />
            <Route path="players" element={<div>players page</div>} />
          </Route>
          <Route path="*" element={<Navigate to="admin" replace />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
