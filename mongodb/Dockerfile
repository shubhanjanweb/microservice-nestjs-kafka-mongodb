FROM mongo
EXPOSE 27017
ENV MONGO_INITDB_ROOT_USERNAME=iihtAdmin
ENV MONGO_INITDB_ROOT_PASSWORD=iihtpassword2022
ENV MONGO_INITDB_DATABASE=SkillTrackerDB
COPY ./mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js