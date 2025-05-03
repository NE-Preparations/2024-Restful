import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Node Backend',
        description: 'Node Backend API Documentation',
    },
    host: 'localhost:5040',
    basePath: '/api/v1',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Auth',
            description: 'Authentication endpoints'
        },
        {
            name: 'Users',
            description: 'Users endpoints'
        },
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        }
    },
    definitions: {}
}

const outputFile = './src/swagger/doc/swagger.json';
const routes = ['./src/routes/index.ts'];

swaggerAutogen()(outputFile, routes, doc).then(async() => {
    await import('./../app.ts');
})