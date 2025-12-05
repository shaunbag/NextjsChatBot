export async function POST(req: Request) {
  const { message } = await req.json()

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-5-nano",
      input: message,
      store: true
    }),
  })

  const data = await response.json()
  console.log(data)
  if(data.error){
    return Response.json({
    reply: data.error.message
  })
  }
  return Response.json({
    reply: data.message
  })
}
