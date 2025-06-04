import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { buildDataSourceOptions } from './config/typeorm.options';
dotenv.config(); // 👈 load .env
// then :
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('NODE_ENV', NODE_ENV);
export const AppDataSource = new DataSource(buildDataSourceOptions(NODE_ENV));
