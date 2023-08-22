export function onRequestGet(context)
{
	return new Response(JSON.stringify(new Date().toISOString()))
}
