import MSBanner from "./MSBanner";
import Image from "next/image";
export default function Microservice() {
    return (
<div>

 

    <MSBanner></MSBanner>

 <div className="p-12">

    <div>
    <p className="py-20 text-2xl font-extralight ">
            We help companies with legacy IT infra by converting it into microservice based independent collaborating units. We have a deep expertise in building and implementing the microservices architecture considering both business goals and technical requirements and best practices. I.e. no only developing from scratch is the only way to implement microservices but we consider adding new components or step-by-step migration - depending on the project needs.

Learn more how we can help you with your application restructuration and deployment enhancement.
          </p>
    </div>

    <h1 className=" text-6xl font-black">Benefits of Microservice oriented architecture </h1>
    <p className="mt-6 text-2xl font-extralight">
    New way to build optimized for DevOps applications solves most of the issues that monolith-having may cause.

    </p>
 </div>

 


  
   <div className="grid grid-cols-2 gap-8 mt-6 p-12">
    <div className="">
        <h1 className="text-3xl font-black mb-6">Robust basement for large applications

</h1>
        <p className="text-2xl font-extralight" >
            
            Applications with microservices architecture have improved fault 
            tolerance. Because if an app is broken into smaller
             units, the system will stay unaffected, if any module crashes.</p>
    </div>
    <div className="">
    <h1 className="text-3xl font-black mb-6">No dependencies

</h1>
<p className="text-2xl font-extralight" >
        Finally you can try a new cutting-edge technology stack, eliminating any lock-ins. Easier rollbacks and 
        improved feasibility will help you to keep pace with changing trends in IT.
        </p>
    </div>
    <div className="">
    <h1 className="text-3xl font-black mb-6">Transparent logic of the application

</h1>
<p className="text-2xl font-extralight" >
            Developers will better understand how the service works and will dive deeper in its 
            functionality. Thus, they create more suitable and quality code.</p>
    </div>
    <div className="">
    <h1 className="text-3xl font-black mb-6">Decreased deployment cycle

</h1>
<p className="text-2xl font-extralight" >
    Leveraging a microservices approach, you can deploy updates faster because 
            smaller code units and scopes allow quicker deployments and faster time-to-market.</p>
    </div>
    <div className="">
    <h1 className="text-3xl font-black mb-6">Great scalability

</h1>
<p className="text-2xl font-extralight" >
        Because all services are detached, you can scale them horizontally without need to scale the whole application.
        </p>
    </div>
    <div className="">
    <h1 className="text-3xl font-black mb-6">Serverless and other cloud benefits

</h1>
<p className="text-2xl font-extralight" >
    If you consider further migration to cloud or using serverless computing, microservices are the best practice.</p>
    </div>
   </div>
 

<div className="p-12">
<h1 className=" text-6xl font-black">Our microservices expertise</h1>
<p className="py-6 text-2xl font-extralight ">
We provide end-to-end solutions of any complexity.
</p> 

<div className=" grid grid-cols-3 gap-16">
    <div>
    <h1 className="text-3xl font-black mb-6">Microservices integration and migration</h1>

    <p className="text-2xl font-extralight" >
    We provide end-to-end solutions to refactor a monolith to a new flexible architecture. Our DevOps engineers can both build an application from scratch and 
    expand your team and get into current workflow to speed the outcomes up.
    </p>
    </div>


    <div>
    <h1 className="text-3xl font-black mb-6">Microservices maintenance services</h1>
    <p className="text-2xl font-extralight" >
 We support your application 24/7/365, optimizing it and making more sustainable.
 </p>
    </div>


    <div>
    <h1 className="text-3xl font-black mb-6">Microservices consulting

</h1>
<p className="text-2xl font-extralight" >
Alpacked provides a professional advisory services to assess IT systems, roadmap a strategy to
 switch towards microservices, PoC and feasibility study.
</p>
    </div>






</div>
</div>


</div> //main div 
    );
  }