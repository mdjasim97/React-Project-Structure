import { Helmet } from "react-helmet";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <div className="my-10">
                <h1 className='text-5xl text-center'>This is a Home page</h1>
            </div>
        </div>
    );
};

export default HomePage;