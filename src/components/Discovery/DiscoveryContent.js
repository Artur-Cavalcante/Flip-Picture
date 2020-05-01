import React from 'react';

import DockerContent from './Techs/Docker/DockerContent';
import FirefoxContent from './Techs/Firefox/FirefoxContent';
import GitContent from './Techs/Git/GitContent';
import NginxContent from './Techs/Nginx/NginxContent';
import PostgresContent from './Techs/Postgres/PostgresContent';

function DiscoveryContent(props) {
    switch (props.name) {
        case "docker":
            return <DockerContent />;
        case "firefox":
            return <FirefoxContent />;
        case "git":
            return <GitContent />;
        case "nginx":
            return <NginxContent />;
        case "postgres":
            return <PostgresContent />;
        default:
            return <div></div>;
    };
};

export default DiscoveryContent;