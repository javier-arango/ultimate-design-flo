// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getFilesName } from "../../utils";

const dir = "product-images";
const filesData = getFilesName(dir);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(filesData);
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}
