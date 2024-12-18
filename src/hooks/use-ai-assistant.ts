import { useState } from 'react'
import { supabase } from '@/integrations/supabase/client'

export const useAIAssistant = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getAIResponse = async (prompt: string, context?: string) => {
    setIsLoading(true)
    setError(null)

    try {
      console.log('Calling AI assistant with prompt:', prompt)
      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: { prompt, context }
      })

      if (error) {
        console.error('Supabase function error:', error)
        throw error
      }

      console.log('AI response received:', data)
      return data.response
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get AI response'
      setError(errorMessage)
      console.error('AI Assistant Error:', err)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getAIResponse,
    isLoading,
    error
  }
}