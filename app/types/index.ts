import { User } from "@prisma/client";

export type SafeUser = Omit<
User,
"cratedAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string,
    updatedAt: string,
    emailVerified: string | null;
};