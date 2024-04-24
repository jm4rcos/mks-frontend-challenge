export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const page = searchParams.get('page') ?? '1';
	const rows = searchParams.get('rows') ?? '10';
	const apiURL = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=name&orderBy=DESC`;

	try {
		const response = await fetch(apiURL);
		if (!response.ok) {
			throw new Error('Failed to fetch products');
		}
		const { products } = await response.json();

		return new Response(JSON.stringify({ products }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Não foi possível obter os produtos!' }),
			{ status: 500 }
		);
	}
}
