import { PrismaClient } from "@prisma/client";

//  TODO : downgraded @types/node to 15.14.1 to avoid error on NodeJS.Global
interface CustomNodeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient({ log: ["query", "info", "warn", "error"] });

if (process.env.NODE_ENV === "development") { global.prisma = prisma; }

export default prisma;