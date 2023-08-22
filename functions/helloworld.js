export function onRequest(context)
{
	const form_data = context.request.formData();

	const text = JSON.stringify(form_data)

	return new Response(`request = ${text}`);
}