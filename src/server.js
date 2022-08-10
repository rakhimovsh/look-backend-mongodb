import express from 'express';
import fileUpload from 'express-fileupload';
import main from './lib/db.js';
import routers from './routers/index.js';


const app = express();

app.use(express.json());
app.use(fileUpload());
app.use('/v1', routers);

main();


app.listen(process.env.PORT || 5000, () => console.log('server listening on port 5000'));