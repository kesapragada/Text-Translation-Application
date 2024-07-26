// const { Suprsend } = require("@suprsend/node-sdk");

// // Hardcoded API credentials
// const workspaceKey = "Ij8uSbb3mLISFN1GCzwa";
// const workspaceSecret = "SS.WSS.BlyaJONtrcmU9P90euruEX1gY9ESsAyNIBsSqfmi";

// // Initialize Suprsend client
// const supr_client = new Suprsend(workspaceKey, workspaceSecret);

// async function createOrUpdateUserProfile() {
//   try {
//     // Create or get user instance
//     const user = supr_client.user.get_instance("unique_distinct_id");

//     // Set user properties
//     user.set({
//       name: "John Doe",
//       email: "john.doe@example.com",
//       phone: "+1234567890"
//     });

//     // Add communication channels
//     user.add_email("john.doe@example.com");
//     user.add_sms("+1234567890");
//     user.add_whatsapp("+1234567890");

//     // Save the user profile
//     const response = await user.save();
//     console.log("Response:", response);
//   } catch (error) {
//     console.error("Error creating/updating profile:", error.response ? error.response.data : error.message);
//   }
// }

// // Execute the function
// createOrUpdateUserProfile();
// src/createUserProfile.js
const { Suprsend } = require("@suprsend/node-sdk");

// Initialize Suprsend client
const supr_client = new Suprsend("Ij8uSbb3mLISFN1GCzwa", "SS.WSS.BlyaJONtrcmU9P90euruEX1gY9ESsAyNIBsSqfmi");

async function createOrUpdateUserProfile() {
  try {
    const user = supr_client.user.get_instance("unique_distinct_id");

    user.set({
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890"
    });

    user.add_email("john.doe@example.com");
    user.add_sms("+1234567890");
    user.add_whatsapp("+1234567890");

    const response = await user.save();
    console.log("Response:", response);
  } catch (error) {
    console.error("Error creating/updating profile:", error.response ? error.response.data : error.message);
  }
}

createOrUpdateUserProfile();
