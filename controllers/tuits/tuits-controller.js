import posts from "./tuits.js";
let tuits = posts;


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa-icon.png",
 };
 
 // eslint-disable-next-line no-unused-vars
 const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
 }

const createTuit = (req, res) => {
    let newTuit = req.body;
    newTuit = {...templateTuit, ...newTuit};
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}
  
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
  

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
      t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}
  

const findTuits = (req, res) =>
   res.json(tuits);