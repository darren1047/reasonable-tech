import React, { useState } from 'react'
import { Container } from '../../shared/layout'
import { Button, Input, Card } from '../../shared/ui'
import { callMockAPI } from '../../../lib/api/mock-handlers'

export function DemoSection() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    setResult('')
    setLoading(true)

    try {
      const response = await callMockAPI(input)
      setResult(response.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="py-20">
      <Container maxWidth="lg" padding="md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900">
          Our Development Process
        </h2>
        <Card className="p-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Describe your project requirements:
              </label>
              <Input
                placeholder="Tell us about your vision, scope, and timeline..."
                value={input}
                onChange={setInput}
                disabled={loading}
              />
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              loading={loading}
              className="w-full"
            >
              {loading ? 'Processing...' : 'Get Technical Assessment'}
            </Button>

            {result && (
              <div className="p-4 bg-green-50 border-2 border-success rounded-lg">
                <p className="text-success font-semibold">✓ {result}</p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 border-2 border-error rounded-lg">
                <p className="text-error font-semibold">✗ {error}</p>
              </div>
            )}
          </div>
        </Card>
      </Container>
    </section>
  )
}
