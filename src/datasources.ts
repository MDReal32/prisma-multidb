import { PrismaClient as PrismaClientDb1 } from "../.prisma/generated1";
import { PrismaClient as PrismaClientDb2 } from "../.prisma/generated2";
import { PrismaClient as PrismaClientDb3 } from "../.prisma/generated3";
import { PrismaClient as PrismaClientDb4 } from "../.prisma/generated4";
import { PrismaClient as PrismaClientDb5 } from "../.prisma/generated5";
import { PrismaClient as PrismaClientDb6 } from "../.prisma/generated6";

export const db1 = new PrismaClientDb1();
export const db2 = new PrismaClientDb2();
export const db3 = new PrismaClientDb3();
export const db4 = new PrismaClientDb4();
export const db5 = new PrismaClientDb5();
export const db6 = new PrismaClientDb6();
