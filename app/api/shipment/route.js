import { prisma } from "@/app/utils/prisma";

export async function GET() {
  const shipments = await prisma.shipment.findMany();
  return new Response(JSON.stringify(shipments));
}
