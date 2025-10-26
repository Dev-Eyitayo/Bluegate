import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-12 py-10 bg-[#04102b] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <h4 className="font-bold mb-2">Blue Gate Initiative</h4>
            <p>
              64, Blue Gate House, Adeyi Avenue, Old Bodija, Ibadan, Nigeria
            </p>
            <p>Email: info@bluegateinitiative.org</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <div className="flex gap-2">
              <a href="#" className="hover:underline">
                About Us
              </a>{" "}
              ·{" "}
              <a href="#programs" className="hover:underline">
                Programmes
              </a>{" "}
              ·{" "}
              <a href="#contact" className="hover:underline">
                Volunteer
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow</h4>
            <p>Facebook · Twitter · Instagram</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}