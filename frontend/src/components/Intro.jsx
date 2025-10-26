import Container from "./Container";

export default function Intro() {
  return (
    <Container>
      <section className="bg-gradient-to-br from-[#e8f1ff] to-[#f5f9ff] text-center py-20 px-5 rounded-custom shadow-md my-5">
        <h1 className="text-mid font-extrabold text-2xl md:text-3xl mb-4">
          Welcome to Blue Gate Initiative
        </h1>
        <p className="max-w-[720px] mx-auto text-gray-700 text-base md:text-lg mb-7">
          Blue Gate Public Health Promotion Initiative (Blue-Gate Initiative) is a
          Non-Governmental Organization that was inaugurated in 2010 (Incorporated
          in 2016).
        </p>
        <button className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#002fa0] hover:-translate-y-0.5 transition-all">
          Read More
        </button>
      </section>
    </Container>
  );
}