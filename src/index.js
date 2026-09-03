
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';


dotenv.config();

async function main() {
  await connectDB();
}

main();