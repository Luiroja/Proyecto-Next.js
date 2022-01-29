import Head from "next/head";
//Se importa useRouter para manejar las rutas de la app
import {useRouter} from 'next/router';

import styles from "../../styles/Home.module.css"

export default function Posts({posts}) {
    const router =useRouter();
    const {id}= router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>Posts Detail Page</title>
            </Head>
            <h1>Post Page ID: {id}</h1>
            
        </div>
    )
}



// export async function getStaticPaths(props){
    
// }

// export async function getStaticProps({params}) {
//     console.log(params);
// }