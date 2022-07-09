import type { FastifyInstance } from 'fastify';
import Env from '@fastify/env';
import JWT from '@fastify/jwt';
import { Type } from 'fastify-typebox';

export default async function(fastify: FastifyInstance) {
  await fastify.register(Env, {
    dotenv: true,
    schema: Type.Strict(
      Type.Object({
        SECRET_KEY: Type.String(),
      }),
    ),
  });

  await fastify.register(JWT, {
    secret: fastify.config.SECRET_KEY,
  });
}
