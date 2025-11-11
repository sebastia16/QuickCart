import { Inngest } from "inngest";

export const inngest = new Inngest({ name: "grupovega-next" });

// ✅ Define tus funciones antes de exportarlas
export const syncUserCreation = inngest.createFunction(
  { id: "user.creation" },
  { event: "user/created" },
  async ({ event, step }) => {
    console.log("Usuario creado:", event.data);
    return { status: "ok" };
  }
);

export const syncUserUpdation = inngest.createFunction(
  { id: "user.updation" },
  { event: "user/updated" },
  async ({ event, step }) => {
    console.log("Usuario actualizado:", event.data);
    return { status: "ok" };
  }
);

export const syncUserDeletion = inngest.createFunction(
  { id: "user.deletion" },
  { event: "user/deleted" },
  async ({ event, step }) => {
    console.log("Usuario eliminado:", event.data);
    return { status: "ok" };
  }
);