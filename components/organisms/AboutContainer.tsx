import React from "react";
import Image from "next/image";


type TeamMember={
  name:string;
  role:string;
  imageUrl:string;
};


const Leadership : TeamMember[] = [
  { name: 'Mojtaba', role: 'God of Product Warfare', imageUrl: '/images/mojtabaa.png'},
  { name: 'Amir', role: 'Sheriff of the Wild Codes', imageUrl: '/images/amirr.png'},
  { name: 'Faezeh', role: 'Guardian of Client Harmony', imageUrl: '/images/faezehh.png'},
  { name: 'Mehdi', role: 'Lord Commander of User Experience', imageUrl: '/images/team-mehdi.png'},
  { name: 'Jenni', role: 'The Zenith of Galaxy Marketing', imageUrl: '/images/jennii.png'},
];

export default function Team (){
  return(
    <main className="min-h-screen">
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-11">
            <h3 className="lg:text-4xl text-2xl text-white/95 md:text-4xl font-bold mb-2">
              Leadership team <span className="text-white/40"> 15+ years of cross-industry</span><br/>
              <span className="text-white/40">strategic expertise.</span>
            </h3>
          </div>
        
          <div className="grid grid-cols-1  md:grid-cols-6 gap-6">
            {Leadership.map((teams,t)=>(
              <div key={teams.name} className={`flex flex-col items-center ${t < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}>
                <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl">
                  <Image
                  src={teams.imageUrl}
                  alt={teams.name}
                  fill
                  className="object-cover "
                  />
                </div>
                <h3 className={`${t < 2 ? 'text-2xl' : 'text-xl'}  font-sans text-white`} >
                  {teams.name}
                </h3>
                <p className={`${t < 2 ? 'text-md' : 'text-sm'} text-center text-white/60`}>
                {teams.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}; 
