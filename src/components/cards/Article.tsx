import Card from "../Card";

const Article = () => {
  return (
    <Card
      title="how to build reusable componenets"
      description="A step-by-step guide to creating beautiful and functional user interfaces."
      footer={<a href="#">Read more</a>}
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        optio enim dolorem a itaque magni eaque beatae architecto velit voluptas
        ullam tempora asperiores cum, aliquam sit sed tenetur labore
        doloremque!...
      </p>
    </Card>
  );
};

export default Article;
