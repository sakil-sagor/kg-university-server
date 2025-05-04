import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

// NODE_ENV= development
// PORT=5000
// DATABASE_URL= mongodb+srv://sakil-:sakil-@cluster0.9clk0.mongodb.net/basic-server?retryWrites=true&w=majority&appName=Cluster0
