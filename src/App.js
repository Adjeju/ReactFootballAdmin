import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import MatchCard from "./components/MatchCard";
import Navigation from "./components/Navigation";
import RequireAuth from "./components/RequireAuth";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import MatchesPage from "./pages/MatchesPage";
import PlayersPage from "./pages/PlayersPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Container className="py-2">
        <Routes>
          <Route path="admin" element={<AdminPage />}>
            <Route index element={<LoginPage />} />
            <Route
              path="matches"
              element={
                <RequireAuth>
                  <MatchesPage />
                </RequireAuth>
              }
            >
              <Route path=":matchId" element={<MatchCard />} />
            </Route>
            <Route
              path="players"
              element={
                <RequireAuth>
                  <PlayersPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="admin" replace />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
