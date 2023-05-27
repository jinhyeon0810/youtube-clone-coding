import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvdier } from "./context/YoutubeContextApi";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <YoutubeApiProvdier>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Videos />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/videos/:keyword" element={<Videos />} />
              <Route path="/videos/watch/:id" element={<VideoDetail />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </YoutubeApiProvdier>
    </>
  );
}

export default App;
