import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "@/config/inngest";

console.log("🔹 Cargando funciones Inngest:", {
  creation: !!syncUserCreation,
  updation: !!syncUserUpdation,
  deletion: !!syncUserDeletion,
});

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ].filter(Boolean), // 🔸 filtra undefined
});