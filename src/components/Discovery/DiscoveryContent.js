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
            break;
        case "firefox":
            return <FirefoxContent />;
            break;
        case "git":
            return <GitContent />;
            break;
        case "nginx":
            return <NginxContent />;
            break;
        case "postgres":
            return <PostgresContent />;
            break;

    };
};

export default DiscoveryContent;