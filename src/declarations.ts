import 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      LOG_LEVEL: string
      NODE_ENV: string
      SECRET_KEY: string
      DATABASE_URL: string
      API_HOST: string
      API_PORT: string
    }
  }
}

export default {};
