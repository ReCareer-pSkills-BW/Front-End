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
    img: 'https://images.unsplash.com/photo-1560291543-ed9726c81c08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
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
        src: 'https://images.unsplash.com/photo-1560291543-ed9726c81c08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',  
        id: 0
    },
    {
      name: 'Luigi',
      age: 50,
      primary_skill: 'Plumbing', 
      src: 'https://i.redd.it/rs7ew3qulzny.png', 
      id: 1,
    },
    {
      name: 'Peach',
      age: 49,
      primary_skill: 'Being Kidnapped',  
      src: 'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/62951/97075/127357-1024__91429.1537351267.jpg?c=2?imbypass=on',
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
          src: 'https://ih1.redbubble.net/image.754208203.5375/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg',
          id: 0
      },
      {
        name: 'Toad',
        age: 44,
        primary_skill: 'Hes just a fun guy',
        src: 'https://cdn.vox-cdn.com/thumbor/Kxw2xgZrIalMYOAMS18bCHkdlDc=/0x0:1712x993/1200x800/filters:focal(720x361:992x633)/cdn.vox-cdn.com/uploads/chorus_image/image/63399492/Red_Toad_SM3DW.0.jpg',  
        id: 1,
      },
      {
        name: 'Goomba',
        age: 19,
        primary_skill: 'Loafing',  
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dc6lezi-6fc3e301-a263-499b-83fc-43b49a1a1d10.png/v1/fill/w_600,h_708,strp/super_mario__goomba_2d_by_joshuat1306_dc6lezi-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA4IiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kYzZsZXppLTZmYzNlMzAxLWEyNjMtNDk5Yi04M2ZjLTQzYjQ5YTFhMWQxMC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kVwREvNQAuXyuq6Dt1sMdwMpCBsw0eBkxX0zIugSmes',
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
          src: 'https://images.unsplash.com/photo-1566576912302-723145d39b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=6240&q=80',
          id: 0,
        },
      {
        name: 'Koopa',
        age: 83,
        primary_skill: 'Coming back as a shell and making you regret it', 
        src: 'https://www.mariowiki.com/images/thumb/5/5c/SuperMarioParty_KoopaTroopa.png/1200px-SuperMarioParty_KoopaTroopa.png', 
        id: 1,
      },
      {
        name: 'Wario',
        age: 68,
        primary_skill: 'Being kinda like that weird uncle',  
        src: 'https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/904/775887-wario.jpg',
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
