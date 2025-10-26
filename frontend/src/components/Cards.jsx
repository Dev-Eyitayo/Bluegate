import Container from "./Container";
import Card from "./Card";

const cardData = [
  {
    title: "Our Vision",
    description:
      "To positively influence the health behaviour of individuals and communities through sustainable, evidence-based interventions.",
  },
  {
    title: "Our Mission",
    description:
      "Deliver community-centered health promotion programs, capacity building, and advocacy to improve health outcomes.",
  },
  {
    title: "Get Involved",
    description:
      "Volunteer, partner, or donate to support programmes that provide real impact for vulnerable groups.",
  },
];

export default function Cards() {
  return (
    <Container>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </Container>
  );
}