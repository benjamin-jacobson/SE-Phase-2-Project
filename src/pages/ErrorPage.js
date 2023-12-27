import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    console.log(error);

    return(
        <main>
            <h1> Oh no! Something went wrong! </h1>
        </main>
    )
}

export default ErrorPage;