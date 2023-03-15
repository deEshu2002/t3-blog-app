import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const Router = createTRPCRouter({
  
  hello: publicProcedure.input(z.object({text: z.string()})).query(({input}) => {
    return {
      inserteddata:  `hello ${input.text}`,
    };
  }),
  
  insertPost: publicProcedure.input(z.object({title:z.string(), content:z.string(),author:z.string()})).mutation(async ({ctx,input}) => {
    const newBlog = await ctx.prisma.post.create({
      data:{
        author: input.author,
        title: input.title,
        content: input.content,
      }
    })
    return Promise.resolve(newBlog);
  }),
  
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
})

