import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const createFile = mutation({
  args: {
    name: v.string(),
  },
  async handler(ctx, args) {
    const id = await ctx.auth.getUserIdentity()
    console.log(id)
    await ctx.db.insert("files", { name: args.name })
  },
})

export const getFile = query({
  args: {},
  async handler(ctx) {
    return await ctx.db.query("files").collect()
  },
})
