import NextCors from "nextjs-cors";
const cors = async (req: any, res: any) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
};
export default cors;
