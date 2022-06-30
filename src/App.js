import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import MatchCard from "./components/MatchCard";
import Navigation from "./components/Navigation";
import PlayerCard from "./components/PlayerCard";
import RequireAuth from "./components/RequireAuth";
import IsAuthed from "./components/IsAuthed";
import UserInfo from "./components/UserInfo";
import UsersTable from "./components/UsersTable";
import {
  AdminPage,
  MatchesPage,
  PlayersPage,
  UsersPage,
  LoginPage,
} from "./pages";

const App = () => {
  return (
    <div>
      <Navigation />
      <Container className="py-2">
        <Routes>
          <Route path="admin" element={<AdminPage />}>
            <Route
              index
              element={
                <IsAuthed>
                  <LoginPage />
                </IsAuthed>
              }
            />
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
            >
              <Route path=":playerId" element={<PlayerCard />} />
            </Route>
            <Route
              path="users"
              element={
                <RequireAuth>
                  <UsersPage />
                </RequireAuth>
              }
            >
              <Route path="" element={<UsersTable />} />
              <Route path=":userId" element={<UserInfo />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="admin" replace />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
