import { Route, Routes } from "react-router";
import homepage from "./pages/homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { toast } from "react-hot-toast";
import daisyui from "daisyui";
import "daisyui/dist/full.css";
import "./index.css";

const App = () => {
  return (
    <div data-theme="forest">
      <button className = "btn btn-primary">Click here!!!</button>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
      <h1>Welcome to the MERN Stack App</h1>
      {/* Add your components and routes here */}
    </div>
  );
};

export default App;