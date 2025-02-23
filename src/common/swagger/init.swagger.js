import video from "./video.swagger.js";

const swaggerDocument = {
   openapi: "3.1.0",
   info: {
      title: "Be Cyber Media anh long dệp trai",
      version: "123123123123123",
   },
   servers: [
      {
         url: "http://localhost:3069",
         description: "server tại local",
      },
   ],
   components: {
      securitySchemes: {
         anhLongToken: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
         },
      },
   },
   paths: {
      ...video,
   },
};

export default swaggerDocument;
