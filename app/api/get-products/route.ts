export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const page = searchParams.get('page') as string;
	const rows = searchParams.get('rows') as string;

	const apiURL = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=name&orderBy=DESC`;

	try {
		const response = await fetch(apiURL);
		const { products } = await response.json();

		return Response.json({ products });
	} catch {
		return Response.json({ error: 'Não foi possível obter os produtos!' });
	}
}
