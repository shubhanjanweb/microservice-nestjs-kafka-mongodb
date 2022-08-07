db.createUser({
  user: 'iihtAdmin',
  pwd: 'iihtpassword2022',
  roles: [
    {
      role: 'readWrite',
      db: 'SkillTrackerDB',
    },
  ],
});

db = new Mongo().getDB("SkillTrackerDB");

db.createCollection('skills', { capped: false });
db.createCollection('profiles', { capped: false });

db.skills.insert([
  { "skillId": "SK001", "skillName": "HTML-CSS-JAVASCRIPT", "skillType": "Technical" },
  { "skillId": "SK002", "skillName": "ANGULAR", "skillType": "Technical" },
  { "skillId": "SK003", "skillName": "REACT", "skillType": "Technical" },
  { "skillId": "SK004", "skillName": "SPRING", "skillType": "Technical" },
  { "skillId": "SK005", "skillName": "RESTFUL", "skillType": "Technical" },
  { "skillId": "SK006", "skillName": "HIBERNATE", "skillType": "Technical" },
  { "skillId": "SK007", "skillName": "GIT", "skillType": "Technical" },
  { "skillId": "SK008", "skillName": "DOCKER", "skillType": "Technical" },
  { "skillId": "SK009", "skillName": "JENKINS", "skillType": "Technical" },
  { "skillId": "SK010", "skillName": "AWS", "skillType": "Technical" },
  { "skillId": "SK011", "skillName": "SPOKEN", "skillType": "Non Technical" },
  { "skillId": "SK012", "skillName": "COMMUNICATION", "skillType": "Non Technical" },
  { "skillId": "SK013", "skillName": "APTITUDE", "skillType": "Non Technical" }
]);