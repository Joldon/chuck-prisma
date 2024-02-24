import { prisma } from "@/lib/prisma"; //import prisma client

// This is the route to get the total number of visitors
// This route uses Prisma to interact with the database
export async function GET() {
  // I am using upsert to either update the existing count or create a new record
  const totalVisits = await prisma.totalVisits.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      count: 1,
    },
    update: {
      count: {
        increment: 1, // Specifying the id explicitly because it's not auto-generated
      },
    },
  });

  // returns new response with the total count of visitors
  return new Response(JSON.stringify({ count: totalVisits.count }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
