import { connectToServer } from "./socket-client";
import "./style.css";
// import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1>Websocket - Client</h1>
   <span id="server-status">Connecting...</span>

   <ul id="clients-ul"></ul>
  </div>
`;

connectToServer();

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
