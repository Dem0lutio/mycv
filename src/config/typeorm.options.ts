import { DataSourceOptions } from 'typeorm';

// Function to know if we're running in a TS env.
function isRunningInTs(): boolean {
  return __filename.endsWith('.ts');
}

export function buildDataSourceOptions(
  env: string = process.env.NODE_ENV || 'development',
): DataSourceOptions {
  const fileExt = isRunningInTs() ? 'ts' : 'js';

  switch (env) {
    case 'development':
      return {
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [`src/**/*.entity.${fileExt}`],
        migrations: [`src/migrations/*.${fileExt}`],
        synchronize: false,
      };
    case 'test':
      return {
        type: 'sqlite',
        database: 'test.sqlite',
        entities: [`src/**/*.entity.${fileExt}`],
        migrations: [`src/migrations/*.${fileExt}`],
        synchronize: false,
        migrationsRun: true, //Important as per lecture 157
      };
    default:
      throw new Error(`Unsupported NODE_ENV: ${env}`);
  }
}
