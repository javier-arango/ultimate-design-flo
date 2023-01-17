// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getFilesName } from "../../utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filesData = getFilesName("product-images");

    if (req.method === "GET") {
      res.status(200).json(filesData);
    } else {
      res.status(400).json({ message: "Bad request" });
    }
  } catch (e) {
    res.status(400).json({ error: true, message: "Images not found" });
  }
}
