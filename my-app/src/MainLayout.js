import React from 'react';
import HeaderComponent from './HeaderComponent'; // Import your header component

function MainLayout(props) {
    return (
        <div>
            <HeaderComponent subscriber_id={props.subscriber_id} distinct_id={props.distinct_id} />
            <main>{props.children}</main>
        </div>
    );
}

export default MainLayout;
