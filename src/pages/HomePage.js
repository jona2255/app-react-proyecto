import HomeDescription from "../components/HomeDescription";
import ListOds from "../components/OdsList";

const HomePage = () => {
  return (
    <>
      <section>
        <HomeDescription />
      </section>

      <hr className="my-5" />

      <section className="text-center">
        <ListOds />
      </section>
    </>
  )
}

export default HomePage;
