import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "MDS - NodeJS api with Express",
      version: "1.0.0",
    },
    servers: [
      {
        url: `${process.env.LOCAL_ADRESS}${process.env.LOCAL_PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

export const specs = swaggerJSDoc(options);
