import Image from "next/image";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import BGImage from "@/components/BGImage";

export default function Home() {
  return (
   <>
   <BGImage />
   <Services/>
   <OurTeam />
   </>
  );
}
