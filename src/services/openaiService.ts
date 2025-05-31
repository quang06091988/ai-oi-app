export async function askGPT(message: string): Promise<string> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini', // ✅ Dùng model miễn phí bạn đang được cấp
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    }),
  });

  const data = await res.json();
  console.log('🔍 GPT response:', data);

  if (data?.choices?.[0]?.message?.content) {
    return data.choices[0].message.content.trim();
  } else {
    const errorMessage =
      data?.error?.message || 'Không nhận được phản hồi từ GPT';
    throw new Error(errorMessage);
  }
}
