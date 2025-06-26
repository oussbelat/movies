import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="g-container">
          <nav className="py-[12px] flex justify-center items-center gap-45">
            <div className="logo flex gap-[30px]">
              <h1 >
                OM<span className="span">V</span>
              </h1>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                className="input rounded-2xl outline-none px-6 w-[450px] py-2 text-sm border border-white focus:border-white focus:ring-1 focus:ring-white transition duration-200"
              />
            </div>
            <div className="font-bold flex gap-5 ln items-center">
              <a href="">Free Movies & TV</a>
              <a href="">Live TV</a>
              <a href="">Features</a>
              <a href="">Download</a>
              <button className="button rounded-[4px] px-3 ">Sign Up Free</button>
            </div>
          </nav>
          <header className=" px-[60px] flex flex-col gap-3">
           <h1 className="  pt-[170px]  font-bold h1head">Free Movies to Watch Anytime Anywhere.</h1> 
           <h2 className="  headh2">The search is over! Let Plex help you find the perfect movie to watch tonight for free.</h2>
           <button className="headbutton rounded-[20px]">Watch Free</button>
          </header>
        </div>
        <section className="bg-black h-[300px] w-[100%] text-amber-50 flex flex-col justify-center gap-11 ">
          <h1 className="text-center h1SEC1">Streaming services on OM<span className="span">V</span></h1>
           <div className="images flex  gap-7   ">
            <img src="https://images.justwatch.com/icon/202068207/s100/dekkoo.avif" alt="" className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/243239329/s100/broadwayhd.avif" alt="" className="rounded-[10px]" />
            <img src="	https://images.justwatch.com/icon/243233518/s100/magellantv.avif" alt="" className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/242563117/s100/aha.avif" alt="" className="rounded-[10px]" />
            <img src="	https://images.justwatch.com/icon/208148387/s100/docsville.avif" alt="" className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/242706549/s100/argo.avif" alt="" className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/273964237/s100/flixole.avif" alt="" className="rounded-[10px]" />
            <img src="	https://images.justwatch.com/icon/322992749/s100/amazonprimevideo.avif" alt=""  className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/207360008/s100/netflix.avif" alt=""  className="rounded-[10px]"/>
            <img src="https://images.justwatch.com/icon/138047862/s100/sunnxt.avif" alt=""  className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/164970114/s100/mubi.avif" alt=""  className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/331880023/s100/zee5.avif" alt=""  className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/273964237/s100/flixole.avif" alt=""  className="rounded-[10px]" />
            <img src="https://images.justwatch.com/icon/322992749/s100/amazonprimevideo.avif" alt=""  className="rounded-[10px]" />
           </div>

        </section>
        <section className="sec2 h-[500px] bg-black text-white pt-[70px] flex gap-22 px-[40px] items-center">
    <div className="circle w-[50%]">
      
  <img src="../../public/images/watch-free-mobile-removebg-preview.png" alt="" className="phone-img" />
    </div>
  
  
  <div className="red-circle"></div>

  <div className="w-[44%] flex flex-col gap-10">
    <h1 className="h1seccircle ">It has never been easier to watch free movies online.</h1>

    <h3 className="font-semibold">
      Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in.
      No matter what device you choose, your free movies will pick up where you left off with ease.
    </h3>
    <button className="button">Watch Free</button>
  </div>
</section>

    </>
  );
}
