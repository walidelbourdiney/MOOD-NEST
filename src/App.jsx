import React from "react";
import Journaling from "./components/Journaling";
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
import AboutUs from "./components/AboutUs";

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
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
