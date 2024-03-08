import AboutBanner from "./AboutBanner";
import Image from "next/image";
export default function Kubernetes() {
    return (
<div>

 

    <AboutBanner></AboutBanner>

<div className="grid grid-cols-3 gap-5 p-12 m-12 ">

<div className="p-6">
10
Years of experience in IT
</div>

<div className="p-6">20+
Migrations from monolithic infrastructure to modern microservices applications</div>
<div className="p-6">
10+
Industries served
</div>

</div>
 

        <div className=" p-12">
            <h1 className="text-6xl font-black mb-6 ">
Who We Are 
            </h1>
            <p className=" text-left font-extralight text-2xl pb-12 ">
            CompTech is one of the oldest and leading technology solution providers in Bangladesh. Since establishment in 1989, CompTech has been providing complete range of IT solutions,. including IT Security, Business Application Deployment, Data Center Design and Commissioing.

In 2022 CompTech was acquired by RenComGroup USA, a global conglomerate whose business interests spans across public media, cloud technology to industrial manufacturing.

Adding to the existing portfolio of CompTech, new divisions have been added which includes cloud technology, cloud native cybersecurity and data center automation.     </p>
        </div>
 


 <div className="flex flex-row gap-4  text-slate-50 p-12 bg-cyan-950">
            <div className="basis-5/12">
             <h1 className="text-6xl font-black">Our Vision</h1>
            </div>

            <div className="basis-7/12  text-justify font-extralight text-2xl">
            Be the independent go-to cloud partner for customers, 
            skilled employees and hyperscalers across wider Europe.
            </div>
 </div>



                <div className=" bg-teal-900 text-slate-50 flex flex-row gap-4 p-12">


                            <div className="text-left basis-7/12   text-2xl font-extralight">
                            Being the company that enables customers through all phases
                            of their cloud journey and creates an empowering workplace.   
                </div>

               <div className="basis-5/12">
               <h1 className="text-6xl font-black text-right">    Our Mission </h1>

                            </div>
                </div>


<div className="grid grid-cols-2 gap-12 p-12">
    <div>
        <h1 className="text-2xl font-black">Create Customer Value</h1>
        <p className="text-2xl font-extralight ">
        Treat your customer as a partner. Be pragmatic. Deliver results with long-term customer impact in mind.
        </p>
    </div>

    <div>
        <h1 className="text-2xl font-black">Be Considerate</h1>
        <p className="text-2xl  font-extralight">
        Embrace diversity. Contribute to thoughtfulness. Challenge professionally, care personally.
        </p>
    </div>


    <div>
        <h1 className="text-2xl font-black">Take Action
</h1>
        <p className="text-2xl font-extralight ">
        Take responsibility and ownership. Be proactive and get things done. Commit to quality.
        </p>
    </div>



    <div>
        <h1 className="text-2xl font-black">Be Collaborative
</h1>
        <p className="text-2xl  font-extralight">
        Contribute to teamwork without borders. Share information and knowledge. Listen to other perspectives and help each other achieve results.
        </p>
    </div>



    <div>
        <h1 className="text-2xl font-black">Be Transparent
</h1>
        <p className="text-2xl font-extralight ">
        Be open and honest. Communicate with transparency. Build trust over time with customers, partners and colleagues.
        </p>
    </div>


    <div>
        <h1 className="text-2xl font-black">Be Curious
</h1>
        <p className="text-2xl  font-extralight">
        Embrace change. Ask more and search. Commit to continuous learning and explore new paths.
        </p>
    </div>







</div>

</div> //main div 
    );
  }