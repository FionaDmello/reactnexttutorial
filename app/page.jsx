import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Develop. Preview. Ship"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <>
      <Header />
      <div>
        <ul>
          {names.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <LikeButton />
      </div>
    </>
  );
}

export default HomePage;
