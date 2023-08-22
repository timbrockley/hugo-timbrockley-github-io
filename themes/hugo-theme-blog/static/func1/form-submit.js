export default
{
	async fetch(request, env, ctx)
	{
		let text = await request.text();

    	return new Response(`request = ${text}`);
  	},
};