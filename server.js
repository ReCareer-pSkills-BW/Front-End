const express = require('express');
const cors = require('cors');
const port = 3333;
const token =
  'jhkleasfuiohavfgahbouivhaipojvhsuoeygvhpiehv32456';


const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let candidate = [
  {
    name: 'Mario',
    age: 48,
    primary_skill: 'Plumbing',  
    id: 0,
    provider: 'State Pen'
  },
  {
    name: 'Luigi',
    age: 50,
    primary_skill: 'Plumbing',  
    id: 1,
    provider: 'Federal Facility'
  },
  {
    name: 'Peach',
    age: 49,
    primary_skill: 'Being Kidnapped',  
    id: 2,
    provider: 'County Jail'
  }
];

let providers = [
  {
    name: 'State Pen',
    id: 0,
    candidates: [
    {
        name: 'Mario',
        age: 48,
        primary_skill: 'Plumbing',  
        id: 0
    },
    {
      name: 'Luigi',
      age: 50,
      primary_skill: 'Plumbing',  
      id: 1,
    },
    {
      name: 'Peach',
      age: 49,
      primary_skill: 'Being Kidnapped',  
      id: 2,
      provider: 'County Jail'
    }
  ]
  },
  {
    name: 'County Jail',
    id: 1,
    candidates: [
      {
          name: 'Yoshi',
          age: 3000,
          primary_skill: 'Yodeling',  
          id: 0
      },
      {
        name: 'Toad',
        age: 44,
        primary_skill: 'Hes just a fun guy',  
        id: 1,
      },
      {
        name: 'Goomba',
        age: 19,
        primary_skill: 'Loafing',  
        id: 2,
        provider: 'County Jail'
      }
    ]
  },
  {
    name: 'Federal Facility',
    id: 2,
    candidates: [
      {
          name: 'Bowser',
          age: 10471,
          primary_skill: 'Being Slow',  
          id: 0
      },
      {
        name: 'Koopa',
        age: 83,
        primary_skill: 'Coming back as a shell and making you regret it',  
        id: 1,
      },
      {
        name: 'Wario',
        age: 68,
        primary_skill: 'Being kinda like that weird uncle',  
        id: 2,
        provider: 'County Jail'
      }
    ]
  },
]

let user = [
  {
    username: 'admin',
    password: 'admin'
  }
]
server.get('/candidates', (req, res) => {
  res.json(candidate);
});
let candidateId = candidate.length;

server.get('/providers', (req, res) => {
  res.json(providers);

});
let providersId = providers.length;

server.post('/candidate', (req, res) => {
  const { name, age, primary_skill } = req.body;
  const newCandidate = { name, age, height, id: candidateId };
  if (!name || !age || !primary_skill) {
    return sendUserError(
      'Ya gone did oofed! Name/Age/skill are all required to create a candidate in the DB.',
      res
    );
  }
  const findCandidateByName = candidate => {
    return candidate.name === name;
  };
  if (candidate.find(findCandidateByName)) {
    return sendUserError(
      `Ya gone did goofed! ${name} already exists in the DB.`,
      res
    );
  }

  candidate.push(newCandidate);
  candidateId++;
  res.json(candidate);
});

server.put('/candidate/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, primary_skill } = req.body;
  const findCandidateById = candidate => {
    return candidate.id == id;
  };
  const foundCandidate = candidate.find(findCandidateById);
  if (!foundCandidate) {
    return sendUserError('No Candidate found by that ID', res);
  } else {
    if (name) foundCandidate.name = name;
    if (age) foundCandidate.age = age;
    if (height) foundCandidate.height = height;
    res.json(candidate);
  }
});

server.delete('/candidate/:id', (req, res) => {
  const { id } = req.params;
  const foundCandidate = candidate.find(candidate => candidate.id == id);

  if (foundCandidate) {
    const CandidateRemoved = { ...foundCandidate };
    candidate = candidate.filter(candidate => candidate.id != id);
    res.status(200).json(candidate);
  } else {
    sendUserError('No candidate by that ID exists in the DB', res);
  }
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    req.loggedIn = true;
    setTimeout(() => {
      res.status(200).json({
        payload: token
      });
    }, 1000);
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});

module.exports = server;
