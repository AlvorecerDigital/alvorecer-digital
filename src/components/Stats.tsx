export const Stats = () => {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Impacto da IA nos Negócios
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Dados que comprovam a eficiência da automação e IA
            </p>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                Aumento em Produtividade
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                40%
              </dd>
            </div>
            
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                Redução de Custos
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                25%
              </dd>
            </div>
            
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                Satisfação do Cliente
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                95%
              </dd>
            </div>
            
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                ROI Médio
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                300%
              </dd>
            </div>
          </dl>

          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                Tempo Economizado em Tarefas Repetitivas
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                70%
              </dd>
            </div>
            
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                Aumento em Vendas com IA
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                50%
              </dd>
            </div>
            
            <div className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <dt className="text-sm font-semibold leading-6 text-white">
                Eficiência Operacional
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                85%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};