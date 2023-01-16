// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ITestimonial } from "../../lib";

const testimonialsData: ITestimonial[] = [
  {
    clientQuote:
      "I recently hired Ultimate Design Flo to reupholster my living room furniture and I couldn't be happier with the results. The team at Ultimate Design Flo was professional and efficient, and they completed the job in a timely manner. The quality of the workmanship was top-notch and the new fabric looks beautiful on my furniture. I would highly recommend Ultimate Design Flo to anyone in need of upholstery services.",
    clientName: "John Doe",
  },
  {
    clientQuote:
      "I had a great experience working with Ultimate Design Flo for my home renovation project. They were able to take my vision and bring it to life with their expert craftsmanship. Highly recommend!",
    clientName: "Jane Smith",
  },
  {
    clientQuote:
      "I was extremely pleased with the service and quality of work provided by Ultimate Design Flo. They reupholstered my dining room chairs and they look brand new. I would definitely use them again.",
    clientName: "Bob Johnson",
  },
  {
    clientQuote:
      "I recently had my couch reupholstered by Ultimate Design Flo and I couldn't be more satisfied. They were professional, efficient, and the finished product exceeded my expectations. I would recommend them to anyone.",
    clientName: "Emily Davis",
  },
  {
    clientQuote:
      "Ultimate Design Flo did a fantastic job reupholstering my old armchair. It looks like new and they completed the job on time and within budget. I highly recommend them.",
    clientName: "Michael Brown",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(testimonialsData);
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}
