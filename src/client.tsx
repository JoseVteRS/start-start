/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/react-start";
import { hydrateRoot } from "react-dom/client";
import { createRouter } from "./router";

// Asegurarse de que estamos en el cliente
if (typeof window !== 'undefined') {
  const router = createRouter();

  // Esperar a que el router esté listo antes de hidratar
  await router.load();

  hydrateRoot(document, <StartClient router={router} />);
}
