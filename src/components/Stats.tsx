export const Stats = () => {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Resultados Comprovados
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-white">
                Clientes Atendidos
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                +1000
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-white">
                Automações Realizadas
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                +5000
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-white">
                Horas Economizadas
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                +10000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};