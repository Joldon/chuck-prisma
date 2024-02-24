import { prisma } from "@/lib/prisma"; //import prisma client

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
  console.log("Visitors count route hit");
  console.log("Total visitors:", totalVisits.count);

  return new Response(JSON.stringify({ count: totalVisits.count }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
