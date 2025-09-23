import { useState } from "react";
import Header from "./components/Header";
import EventListing from "./pages/EventListing";

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      <Header onSearch={setSearchQuery} /> 
      <EventListing searchQuery={searchQuery} />
    </>
  );
}

export default App;
