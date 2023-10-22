import { useRouter } from 'next/router';
import Head from 'next/head';


const DynamicRoute = () => {
    const router = useRouter();
    const { dynamic } = router.query;
        return (
            <>
            <Head>
                <title>{dynamic}</title>

            </Head>
            <div>
                <h1>Dynamic Route</h1>
                <p>{dynamic}</p>
            </div>
            </>
        );

    };

export default DynamicRoute;
    