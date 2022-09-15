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
db.profiles.insert([
  {
    "name": "Ajay Malakar",
    "associateId": "CTS001",
    "mobile": "5469865496",
    "email": "ajay.malakar@cts.com",
    "skills": [
      {
        "skillId": "SK001",
        "expertiseLevel": 20
      }
    ]
  },
  {
    "name": "Niloni Das",
    "associateId": "CTS003",
    "mobile": "5469765497",
    "email": "niloni.das@cts.com",
    "skills": [
      {
        "skillId": "SK009",
        "expertiseLevel": 15
      },
      {
        "skillId": "SK010",
        "expertiseLevel": 20
      }
    ]
  },
  {
    "name": "Ajay Das",
    "associateId": "CTS002",
    "mobile": "8569765497",
    "email": "ajay.das@cts.com",
    "skills": [
      {
        "skillId": "SK005",
        "expertiseLevel": 9
      },
      {
        "skillId": "SK006",
        "expertiseLevel": 6
      }
    ]
  },
  {
    "name": "Twinkle Khanna",
    "associateId": "CTS004",
    "mobile": "8565985497",
    "email": "twinkle.khanna@cts.com",
    "skills": [
      {
        "skillId": "SK001",
        "expertiseLevel": 9
      },
      {
        "skillId": "SK002",
        "expertiseLevel": 6
      },
      {
        "skillId": "SK003",
        "expertiseLevel": 9
      },
      {
        "skillId": "SK006",
        "expertiseLevel": 6
      }
    ]
  }
]);

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