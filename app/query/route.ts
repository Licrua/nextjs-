import { db } from "@vercel/postgres";

const client = await db.connect();

async function listInvoices() {
	const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data.rows;
}

export async function GET() {
	try {
	  // Выполнение асинхронной операции
	  const invoices = await listInvoices();
  
	  // Возвращаем успешный ответ с данными
	  return Response.json(invoices);
	} catch (error) {
	  // Обработка ошибок и возвращение ответа с ошибкой
	  return Response.json({ error: error.message || 'An unexpected error occurred' }, { status: 500 });
	}
  }
  