import React from "react";
import Journaling from "./components/Journaling";
import Heading from "./components/Heading";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import WeatherCheck from "./components/WeatherCheck";
import JournalongHistory from "./components/JournalongHistory";
import Fav from "./components/Fav";
import SiteLayout from "./components/SiteLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/journaling" element={<Journaling />} />
          <Route path="/weather" element={<WeatherCheck />} />
          <Route path="/history" element={<JournalongHistory />} />
          <Route path="/favorites" element={<Fav />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
