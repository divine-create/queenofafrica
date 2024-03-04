import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Divider from "../assets/images/toplight.webp";
import africaQueen from "../assets/images/people/africa-queen.jpeg";
import Queens from "../sections/Queens";

const QueenDom = () => {
  return (
    <>
      <Navbar />
      <section className="relative">
      <div className="hero min-h-screen bg-ipada" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
    <h1 className="text-5xl font-Spectral font-bold">
                EMBRACING A QUEENDOM
              </h1>
              <p className=" mt-4 text-2xl">
                Exploring The Potential Benefits and Positive Impact that She
                may have in Shaping the Future Direction of Africa
              </p>
     
    </div>
  </div>
</div>
        {/* <div className="hero  bg-queendom text-white-400 pt-40 pb-10">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-Spectral font-bold">
                EMBRACING A QUEENDOM
              </h1>
              <p className=" mt-4 text-2xl">
                Exploring The Potential Benefits and Positive Impact that She
                may have in Shaping the Future Direction of Africa
              </p>
            </div>
          </div>
        </div> */}
        <div className=" absolute  top-[35rem] right-0 ">
          <img src={Divider} alt="" className="w-full" />
        </div>
        <div className=" bg-[#F2E0C8] w-full px-28 py-20 ">
          <div className="">
            
            <div className="mt-8">
              <h2 className="font-Spectral font-bold text-4xl text-center">
                Overview
              </h2>
              <p>
                A Queendom is a term used to describe a dominion or realm ruled
                by a Queen, analogous to a Kingdom ruled by a King.  The instant
                case, seeks to address the lacuna marred by unequal treatment of
                women in Africa. A Queendom aims to bring Africans home (and all
                lovers of Africa) from the diaspora whose ancestors were
                forcibly removed from Africa on slave ships back on cruise
                ships.  A Queendom will be a pivotal point of contact for all
                Africans and lovers of Africa in the diaspora who are desirous
                to return for trade, culture, tourism and residence. She will
                encourage them to utilise the dormant resources of the
                Continent in to build the African continent
              </p>
              <br />
              <p>
                It will be a continuation of the historical legacy of
                empowerment laid down by previous Queens
              </p>
              <br />
              <p>
                The agitation of a Queendom is borne out of the necessity to
                have a fair representation of women, the return of our sons and
                daughters from the diaspora, and welcoming all lovers of Africa,
                to experience the rich cultural, historical, traditional and
                societal richness of our Continent.  
              </p>
              <h2 className="font-Spectral font-bold text-4xl text-center m-4">
                Why is there a need for a Queendom in Africa
              </h2>

              <p className=" font-bold text-2xl my-2">
                1. Utilizing Natural Resources
              </p>
              <p>
                There is an urgency in our continent to develop and utilize our
                dormant natural resources
              </p>
              <p className=" font-bold text-2xl my-2">
                2. Reversal of the brain drain
              </p>
              <p>
                Our very finest and most brilliant brains are being enticed to
                Europe, America and Asia,  primarily due to skeletal
                opportunities in the homeland. Changing the narrative can be
                made possible by the Queendom. 
              </p>
              <p className=" font-bold text-2xl my-2">
                3. Diplomatic interaction and societal consideration
              </p>
              <p>
                 The Queendom will act as a centre for the brokerage of peace
                within Africa and act as a bridge between Africa and the
                international communities for conflict resolution,
                mediation, political diplomacy and redress of social
                injustices. 
              </p>
              <p className=" font-bold text-2xl my-2">
                4. National identity and history
              </p>
              <p>
                Provide stability, continuity, a sense  of tradition as well as
                act as a symbolic institution to represent Africa's national
                identity and history.
              </p>
              <p className=" font-bold text-2xl my-2">
                5. Challenging gender norms
              </p>
              <p>
                A  Queendom could challenge deeply ingrained patriarchal
                structure in Africa, potentially leading to greater gender
                equality and female empowerment;  fostering the principles of
                equality and individual’s right. <br />   It will inspire women
                from different parts of Africa to seek positions and challenge
                traditional expectations.
              </p>
              <p className=" font-bold text-2xl my-2">
                6. Focus on socio-economic issues
              </p>
              <p>
                A Queen would bring attention and resources to specific issues
                facing women, men and girls, such as education, healthcare and
                economic opportunities.
              </p>
              <p className=" font-bold text-2xl my-2">
                7. Symbolic representation
              </p>
              <p>
                A Queendom would serve as a powerful symbol of unity and
                cultural pride for certain communities, potentially fostering
                national identity and cohesion thereby leading to actual
                progress.
              </p>
              <div className=" my-8">
                <h2 className="font-Spectral font-bold text-4xl text-center">
                  Has there been a precedent Queendom? 
                </h2>
                <Queens />
               
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QueenDom;
