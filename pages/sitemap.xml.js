//pages/sitemap.xml.js
import ProjectsData from "/utils/projects.json";
const BASEURL = "https://solimanalhalaby.fr";
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://solimanalhalaby.fr/</loc>
     </url>
     <url>
       <loc>https://solimanalhalaby.fr/about</loc>
     </url>
     <url>
       <loc>https://solimanalhalaby.fr/contact</loc>
     </url>
     <url>
       <loc>https://solimanalhalaby.fr/work</loc>
     </url>
     ${ProjectsData.map(({ slug }) => {
       return `
       <url>
           <loc>${`${BASEURL}/project/${slug}`}</loc>
       </url>
     `;
     }).join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await ProjectsData;
  const posts = request;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
