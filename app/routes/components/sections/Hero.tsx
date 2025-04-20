import { Container } from "@mui/material";

export const Hero = () => {
  return (
    <section className="relative pt-10 lg:pt-5">
      <Container className="flex">
        <div className="max-w-3xl">
          <img
            src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            className="rounded-4xl h-auto"
          />
        </div>
      </Container>
    </section>
  );
};
