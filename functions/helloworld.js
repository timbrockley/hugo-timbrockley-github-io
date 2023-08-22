export function onRequest(request, env, ctx)
{
	// const body = await request.formData();

	const text = JSON.stringify(request)

	return new Response(`request = ${text}`);
}