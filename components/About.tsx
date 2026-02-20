export default function BenefitsBlock() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-4 text-center">
        
        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-medium text-black">
          Чем полезен наш сервис
        </h2>

        {/* Линия */}
        <div className="mx-auto my-6 h-[2px] w-16 bg-black" />

        {/* Текст */}
        <p className="mx-auto max-w-[720px] text-sm leading-relaxed text-black/80">
          Мы помогаем быть вовремя в нужном месте. Независимо от обстоятельств.
          <br />
          <br />
          Если по каким-то причинам Вы не можете на своем автомобиле доехать до
          дома, то Вы всегда можете воспользоваться услугами нашей компании.
          Мы сделаем вашу поездку комфортной и безопасной.
        </p>
      </div>
    </section>
  );
}