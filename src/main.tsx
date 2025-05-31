import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";
import { apiRequest } from "@/lib/queryClient";

// Check if user is already logged in
async function checkAuth() {
  try {
    await apiRequest("GET", "/api/auth/session");
  } catch (error) {
    console.error("Session check error:", error);
  }
}

// Initialize application
(async () => {
  await checkAuth();
  createRoot(document.getElementById("root")!).render(<App />);
})();
