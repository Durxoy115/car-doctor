import Image from "next/image";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import BGImage from "@/components/BGImage";
import Brands from "@/components/Brands";
import HomeAbout from "@/components/HomeAbout";
import OurServices from "@/components/OurSrivices";
import OurWork from "@/components/OurWork";
import OurFeatured from "@/components/OurFeatured";
import Pricing from "@/components/Pricing";
import CustomerReview from "@/components/CustomerReview";
import BlogsHome from "@/components/BlogsHome";

export default function Home() {
  return (
   <>
   <BGImage />
   <Brands />
   <HomeAbout/>
   <OurServices />
   <OurWork />
   <OurFeatured />
   <Pricing />
   <CustomerReview />
   <BlogsHome />
   <OurTeam />
   
   </>
  );
}
