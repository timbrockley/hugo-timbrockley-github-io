export async function onRequest(request)
{
	let text = await request.text();

	return new Response(`request = ${text}`);
}
