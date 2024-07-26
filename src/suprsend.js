// // suprsend.js
// require('dotenv').config();
// const { Suprsend } = require("@suprsend/node-sdk");

// const supr_client = new Suprsend(process.env.SUPRSEND_WORKSPACE_KEY, process.env.SUPRSEND_WORKSPACE_SECRET);

// module.exports = supr_client;
import Suprsend from "@suprsend/web-sdk";

const suprClient = new Suprsend("suprsend-embed-key", {
  enable: true,
  workspaceKey: "suprsend_workspace_key",
  apiKey: "suprsend_api_key",
  userIdentifier: "user@example.com"
});

export default suprClient;
