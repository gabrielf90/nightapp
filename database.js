import mongoose from 'mongoose';
const URI ='mongodb+srv://devBemEstar:eOWwiu1qmRDSH6I0@saudeebemestar.ysf2q.mongodb.net/nightapp?authSource=admin&replicaSet=atlas-b7hnyl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

mongoose
.connect(URI)
.then(() => console.log('DB is Up!'))
.catch(()=> console.log(err));