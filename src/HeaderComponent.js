import React from 'react';
import SuprSendInbox from 'suprsend-inbox'; // Adjust import based on your setup
import { Bell } from 'your-icon-library'; // Import bell icon if needed

function HeaderComponent(props) {
    return (
        <div className="-mt-1 ml-auto">
            <SuprSendInbox 
                bellComponent={() => <Bell />}
                theme={{ badge: { backgroundColor: "red" } }}
                themeType="light" // Adjust based on your theme
                workspaceKey={process.env.NEXT_PUBLIC_SUPRSEND_WORKSPACE_KEY}
                subscriberId={props.subscriber_id}
                distinctId={props.distinct_id}
            />
        </div>
    );
}

export default HeaderComponent;
