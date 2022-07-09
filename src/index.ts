import Fastify from 'fastify';
import factory from './factory';

const fastify = Fastify();
factory(fastify);

fastify.listen({ port: 3001 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
