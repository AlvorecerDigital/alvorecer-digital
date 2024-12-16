import { useState } from 'react'
import { supabase } from '@/integrations/supabase/client'

export const useAIAssistant = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getAIResponse = async (prompt: string, context?: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: { prompt, context }
      })

      if (error) throw error

      return data.response
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get AI response')
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