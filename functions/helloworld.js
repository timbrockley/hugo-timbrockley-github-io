export async function onRequest(request, env, ctx)
{
	const body = await request.formData();

	const text = JSON.stringify(body)

	return new Response(`request = ${text}`);
}