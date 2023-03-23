import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type Data = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      // Get prisma to festch the posts
      const data = await prisma.post.findMany();
    } catch (error) {}
  }
}
