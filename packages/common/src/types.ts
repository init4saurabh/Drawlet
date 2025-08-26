import { z } from "zod";

export const CreateUserSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
    name: z.string().min(3)
})

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string().min(6)
})

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20),
})