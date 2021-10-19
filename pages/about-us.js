const DUMMY_DATA =
    {
        title : "Our company is great!",
        content : "This article is about our company"
    }


function AboutUsPage( {ourCompanyData} ){

    return(
        <>
        <h1>About our company.</h1>
        <hr/>
        <h3>{ ourCompanyData.title }</h3>
        <p> {ourCompanyData.content } </p>
        </>
    );

}

export async function getStaticProps(){
	
    return {
        props : {
            ourCompanyData : DUMMY_DATA
        }
    }
}


export default AboutUsPage;