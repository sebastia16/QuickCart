import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// 🔹 Log de control
console.log("🔹 Cargando funciones Inngest:", {
  creation: !!syncUserCreation,
  updation: !!syncUserUpdation,
  deletion: !!syncUserDeletion
});

// ✅ Nueva sintaxis correcta de Inngest
export const { GET, POST } = serve({
  inngest, // antes era "client", ahora debe ser "inngest"
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});