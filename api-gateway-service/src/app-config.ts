import * as dotenv from 'dotenv';

dotenv.config({
    override: true
});

let config = null;

function setConfig(env: any) {
    config = {
        "kafka": {
            "brokers": `${env.KAFKA_BROKER_URL}`,
            "connectionTimeout": env.KAFKA_CONNECTION_TIMEOUT,
            "authenticationTimeout": env.KAFKA_AUTHENTICATION_TIMEOUT,
            "reauthenticationThreshold": env.KAFKA_RE_AUTHENTICATION_THRESHOLD
        },
        "mongodb": {
            "url": `mongodb://${env.MONGO_INITDB_ROOT_USERNAME}:${env.MONGO_INITDB_ROOT_PASSWORD}@${env.MONGODB_URL}/`,
            "db": `${env.MONGO_INITDB_DATABASE}`
        },
        "global": {
            "prefix": `${env.APP_GLOBAL_API_PREFIX}`,
            "defaultVersion": `${env.APP_GLOBAL_DEFAULT_VERSION}`,
            "port": env.APP_GLOBAL_PORT
        },
        "addProfile": {
            "name": "ADD_PROFILE_SERVICE",
            "clientId": "add-profile",
            "groupId": "add-profile-group",
            "kafkaTopic": "add-profile-topic"
        },
        "updateProfile": {
            "name": "UPDATE_PROFILE_SERVICE",
            "clientId": "update-profile",
            "groupId": "update-profile-group",
            "kafkaTopic": "update-profile-topic"
        },
        "searchProfile": {
            "name": "SEARCH_PROFILE_SERVICE",
            "clientId": "search-profile",
            "groupId": "search-profile-group",
            "kafkaTopic": "search-profile-topic"
        },
        "getSkills": {
            "name": "GET_SKILL_SERVICE",
            "clientId": "get-skill",
            "groupId": "get-skill-group",
            "kafkaTopic": "get-skill-topic"
        }
    };
}

setConfig(process.env);

export function getConfig(): any {
    return config;
}

