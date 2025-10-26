import Container from "./Container";

export default function Topbar() {
  return (
    <div className="bg-mid text-white text-sm py-2 mb-5">
      <Container>
        <div className="flex justify-between items-center flex-wrap">
          <div>
            Emergency No: <strong>+234-806-590-3150</strong>
          </div>
          <div>
            Support:{" "}
            <a
              href="mailto:info@bluegateinitiative.org"
              className="text-white hover:underline"
            >
              info@bluegateinitiative.org
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}