import axios from 'axios';
import Thumbnail from '../components/Thumbnail';
import Head from 'next/head';
import {withRouter} from 'next/router';
import {APP_NAME,DOMAIN,FB_ID} from '../config';

const Home = ({blogs,router})=> {
  const renderBlogs = () =>{
    return blogs.map((blog,index)=>{
      return <div key={index}>
        <Thumbnail data ={blog}
        imageUrl={blog.jetpack_featured_media_url}
        date={blog.date}
        title={blog.title.rendered}
        content={blog.excerpt.rendered}
        link={blog.link}/>
        </div>
    })
  }
  const head = ()=>{
    return(
      <Head>
        <title>{`${APP_NAME}`}</title>
        <meta name="description" content={`${APP_NAME}`}></meta>
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`}></link>
        <meta property="og:title" content={`${APP_NAME}`}></meta>
        <meta property="og:description" content={`${APP_NAME}`}></meta>
        <meta property="og:type" content="Website"></meta>
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`}></meta>
        <meta property="og:site_name" content={`${APP_NAME}`}></meta>
        <meta property="og:image" content=""></meta>
        <meta property="og:image:secure_url" content=""></meta>
        <meta property="og:image:type" content=""></meta>
        <meta property="fb:app_id" content={`${FB_ID}`}></meta>
      </Head>
    );
  }
  return (
           <>
          {head()}
          <center><h1><u>Tech News Blog Application</u></h1></center>
          <div>{renderBlogs()}</div>
          </>
        )
  }
Home.getInitialProps= async(context)=>{
  const response= await axios.get(`https://techcrunch.com/wp-json/tc/v1/magazine/?page=1`);
    return{
      blogs:response.data
    }
  }
export default withRouter(Home);
