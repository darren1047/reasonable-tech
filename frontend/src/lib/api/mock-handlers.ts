const API_DELAY = parseInt(import.meta.env.VITE_API_DELAY || '800', 10)

export async function callMockAPI(input: string): Promise<{ result: string }> {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1500 + 500))

  // Mock response based on input
  if (!input.trim()) {
    throw new Error('Input cannot be empty')
  }

  return {
    result: `✓ Processed: "${input.toUpperCase()}" via Reasonable Tech API`,
  }
}
