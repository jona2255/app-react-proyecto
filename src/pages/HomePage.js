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
                <h4 className="mb-5"><strong>Facilis consequatur eligendi</strong></h4>
                <ListOds />
            </section>
        </>
    )
}

export default HomePage;