import * as tuitsDao from './tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;


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
  "disliked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
  "dislikes": 0,
 }


const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    return res.json(tuits);
}

const createTuit = async (req, res) => {
    let newTuit = req.body;
    newTuit = {...templateTuit, ...newTuit};
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
  
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(
    //   (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = 
    //   {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}
  

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //   t._id !== tuitdIdToDelete);
      const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}
  