import styles from './Thumbnail.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import dateFormat from 'dateformat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Thumbnail = ({data})=>{
    const head = ()=>{
        return(
            <Head>
              <title>{`${data.title.rendered}`}</title>
              <meta name="description" content={`${data.title.rendered}`}></meta>
              <meta property="og:title" content={`${data.title.rendered}`}></meta>
              <meta property="og:description" content={`${data.title.rendered}`}></meta>
              <meta property="og:image" content={`${data.jetpack_featured_media_url}`}></meta>
            </Head>
          );
    }
    return (
        <>
        {head()}
        <div className={styles.thumbnail}>
                <Link href={data.link} >
                    <a className={styles.link} target="_blank">
                    <div><div className={styles.text_title}>{decodeURI(data.title.rendered)}</div><div className={styles.date}>{dateFormat(data.date)}</div></div>
                    <div className={styles.content}>{data.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</div>
                    <img src={data.jetpack_featured_media_url} className={styles.thumbnail_image}/>
                    <div className={styles.tags}>{data.tags.map((item,index)=>{return(<FontAwesomeIcon key={index} className={styles.star} icon={faStar}></FontAwesomeIcon>)})}</div>
                    </a>
                </Link>
            </div>
        </>
        )
}
export default Thumbnail;
