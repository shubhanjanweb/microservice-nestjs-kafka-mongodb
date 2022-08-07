import * as dotenv from 'dotenv';

dotenv.config({
    override: true
});

let config = null;

function setConfig(env: any) {
    config = {
        "kafka": {
            "name": "ADD_PROFILE_SERVICE",
            "clientId": "add-profile",
            "kafkaTopic": "add-profile-topic",
            "brokers": `${env.KAFKA_BROKER_URL}`,
            "groupId": `${env.KAFKA_GROUP_ID}`,
            "connectionTimeout": env.KAFKA_CONNECTION_TIMEOUT,
            "authenticationTimeout": env.KAFKA_AUTHENTICATION_TIMEOUT,
            "reauthenticationThreshold": env.KAFKA_RE_AUTHENTICATION_THRESHOLD
        },
        "mongodb": {
            "url": `mongodb://${env.MONGO_INITDB_ROOT_USERNAME}:${env.MONGO_INITDB_ROOT_PASSWORD}@${env.MONGODB_URL}/`,
            "db": `${env.MONGO_INITDB_DATABASE}`
        }
    };
}

setConfig(process.env);

export function getConfig(): any {
    return config;
}

