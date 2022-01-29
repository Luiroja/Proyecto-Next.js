import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
export default function Posts({posts}) {
    return (
        <div >
            <Head>
                <title>Posts Page</title>
            </Head>
            <h1>Post Page</h1>
            <div className={styles.grid}>
                {
                    posts.map(post => (
                    <div className={styles.card}>

                        <h2>{post.text}</h2>
                        <p>{post.publishDate}</p>
                        <p>{post.likes}</p>
                        <p>{post.tags}</p>
                        <a href={post.link}>Click aquí</a>
                    </div>))
                }
            </div>
        </div>
    )
}

//lamando datos de la API 
//getServerSideProps se ejecuta cuando se compila el proyecto
//Usar cuando los datos no se van a cambiar por mucho tiempo (blog)
// export async function getServerSideProps() {
//     const posts = await axios.get('https://dummyapi.io/data/v1/post',
//     {headers: {'app-id' :'61f0b585db5459128d363641' }}
//     )

//     return {
//         props: {
//             posts: posts.data.data
//         }
//     }

// }




//Se usa get getStaticProps se ejecuta en cada petición (navegador busca la data)
//usar cuando los datos se cambian rápido "dinámico" (ejemplo usuarios)
export async function getStaticProps() {
    const posts = await axios.get('https://dummyapi.io/data/v1/post',
    {headers: {'app-id' :'61f0b585db5459128d363641' }}
    )

    return {
        props: {
            posts: posts.data.data
        }
    }

}