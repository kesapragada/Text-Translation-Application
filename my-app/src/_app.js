import React from 'react';
import SuprSendInbox from 'suprsend-inbox'; // Adjust import based on your setup
import { Bell } from 'your-icon-library'; // Import bell icon if needed

function MyApp({ Component, pageProps }) {
    return (
        <>
            <SuprSendInbox 
                bellComponent={() => <Bell />}
                theme={{ badge: { backgroundColor: "red" } }}
                themeType="light" // Adjust based on your theme
                workspaceKey={process.env.NEXT_PUBLIC_SUPRSEND_WORKSPACE_KEY}
                subscriberId={pageProps.subscriber_id}
                distinctId={pageProps.distinct_id}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
