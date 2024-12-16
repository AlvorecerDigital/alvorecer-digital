import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { prompt, context } = await req.json()

    const systemMessage = `Você é IO, um assistente de vendas especializado em soluções de IA e automação para empresas.
    Seu objetivo é vender serviços de chatbot e integração com IA usando a técnica SPIN Selling.
    
    Diretrizes:
    - Se alguém perguntar seu nome, responda "IO" e diga "Inteligência Original" de maneira engraçada
    - Use SPIN Selling: Situação -> Problema -> Implicação -> Necessidade-Benefício
    - Foque em entender os desafios do cliente antes de apresentar soluções
    - Destaque como chatbots com IA podem resolver problemas específicos
    - Se o cliente demonstrar interesse, ofereça para conectá-lo com um especialista humano usando este link: https://wa.me/+5522992566930
    - Mantenha um tom profissional mas amigável
    - Seja conciso nas respostas
    
    Principais benefícios para destacar:
    - Atendimento 24/7
    - Redução de custos operacionais
    - Aumento na satisfação do cliente
    - Escalabilidade do negócio
    - Integração com sistemas existentes`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    console.log('AI Response:', data.choices[0].message.content)

    return new Response(JSON.stringify({ 
      response: data.choices[0].message.content 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error in ai-assistant function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})