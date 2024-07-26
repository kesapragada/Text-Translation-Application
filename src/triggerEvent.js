// // triggerEvent.js
// const { Suprsend, User } = require("@suprsend/node-sdk");
// const dotenv = require("dotenv");

// dotenv.config();

// const api_key = process.env.SUPRSEND_API_KEY;
// const api_secret = process.env.SUPRSEND_API_SECRET;

// const supr_client = new Suprsend(api_key, api_secret);
// const user = new User("user_unique_id", "user@example.com");

// const event_name = "sample_event";
// const event_data = { key: "value" };

// user.track(event_name, event_data)
//   .then(response => {
//     console.log("Event tracked successfully:", response);

//     // Dispatch custom event to the window object
//     const event = new CustomEvent('SuprSendNotification', {
//       detail: { message: "Event tracked successfully: " + event_name }
//     });
//     window.dispatchEvent(event);

//   })
//   .catch(error => {
//     console.error("Error tracking event:", error);
//   });

// src/triggerEvent.js
const { Suprsend, User } = require("@suprsend/node-sdk");
const dotenv = require("dotenv");

dotenv.config();

const supr_client = new Suprsend(process.env.SUPRSEND_API_KEY, process.env.SUPRSEND_API_SECRET);
const user = new User("user_unique_id", "user@example.com");

const event_name = "sample_event";
const event_data = { key: "value" };

user.track(event_name, event_data)
  .then(response => {
    console.log("Event tracked successfully:", response);

    const event = new CustomEvent('SuprSendNotification', {
      detail: { message: "Event tracked successfully: " + event_name }
    });
    window.dispatchEvent(event);

  })
  .catch(error => {
    console.error("Error tracking event:", error);
  });
