interface Env {
  AI: Ai
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const body = await ctx.request.json<{question:string}>();

  const response = await ctx.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    prompt: body.question,
  });

  return new Response(JSON.stringify(response) );
}
