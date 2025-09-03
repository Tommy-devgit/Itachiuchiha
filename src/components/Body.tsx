import profilePic from "../assets/images/itachi-card.jfif"
import profilePic11 from "../assets/images/headers/aea4e075-d170-4fc2-b9b9-07993fa7c884.jfif"
import profilePic22 from "../assets/images/headers/bc3d3aac-a067-4fb7-bfea-0a5d0fae5495.jfif"
import profilePic33 from "../assets/images/headers/da256543-acae-48c6-b680-3ecd624647f8.jfif"
import profilePic2 from "../assets/images/features/𝙄𝙩𝙖𝙘𝙝𝙞 𝙐𝙘𝙝𝙞𝙝𝙖.jfif"
import profilePic3 from "../assets/images/features/b9ab6de6-a205-4c6c-8d5d-ed2ff261712f.jfif"
import profilePic4 from "../assets/images/features/itachi.jfif"
import heroImage from "../assets/images/itachi-uchiha-sharingan-dark-desktop-wallpaper.jpg"
import Gallery from "./Gallery"

function Body() {
  return (
    <div className="flex flex-1 flex-col bg-black text-white">

      {/* Hero */}
      <section id="hero" className="h-[100vh] flex justify-center items-center w-full relative">
        <div
          className="px-6 md:py-32 text-center justify-center w-3/4 rounded-2xl relative z-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/70 w-full h-full absolute top-0 left-0 rounded-2xl"></div>
          <h1 className="text-6xl md:text-8xl font-bold text-red-600 relative z-10">
            ITACHI UCHIHA
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-300 relative z-10">
            A tragic hero who lived in the shadows to protect the light.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold text-red-600">About Itachi</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl px-6">
          {[ 
            {
              img: profilePic11,
              text: "Born a prodigy of the Uchiha clan, Itachi graduated from the academy at age 7 and became a Chūnin at 10. By 13, he was already an ANBU captain. His childhood was filled with responsibility and the burden of genius."
            },
            {
              img: profilePic22,
              text: "As a member of the Uchiha clan, he was caught between loyalty to his family and his duty to Konoha. His choices forced him into a life of sacrifice, where he became misunderstood as a villain."
            },
            {
              img: profilePic33,
              text: "Itachi’s complexity lies in his duality: a loving brother who became an enemy to his own clan, and a loyal shinobi who carried out an unthinkable mission to protect the village."
            }
          ].map((card, i) => (
            <div key={i} className="bg-gray-950 w-[320px] p-6 rounded-2xl flex flex-col gap-4 shadow-lg">
              <img className="w-[300px] rounded-3xl" src={card.img} alt="" />
              <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Powers & Abilities */}
      <section id="powers" className="py-20 bg-gray-950 flex flex-col items-center gap-8 px-6">
        <h2 className="text-3xl font-bold text-red-600">Powers & Abilities</h2>
        <ul className="max-w-3xl text-gray-300 list-disc list-inside space-y-3">
          <li><span className="text-red-500 font-semibold">Sharingan:</span> Mastery of perception, prediction, and copying jutsu.</li>
          <li><span className="text-red-500 font-semibold">Mangekyō Sharingan:</span> Wielder of Amaterasu, Tsukuyomi, and Susanoo.</li>
          <li><span className="text-red-500 font-semibold">Genjutsu:</span> Legendary illusionist, able to trap opponents in powerful illusions.</li>
          <li><span className="text-red-500 font-semibold">Ninjutsu:</span> Fire Style (Katon) techniques and unparalleled Shurikenjutsu skill.</li>
        </ul>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 flex flex-col items-center gap-8 px-6">
        <h2 className="text-3xl font-bold text-red-600">Timeline / Story Arc</h2>
        <div className="max-w-3xl text-gray-300 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-red-500">Uchiha Clan Massacre</h3>
            <p>Under orders from Konoha’s elders, Itachi annihilated his clan to prevent civil war, sparing only his younger brother Sasuke.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500">Akatsuki Involvement</h3>
            <p>Joined the Akatsuki as a spy while secretly working to maintain peace, partnering with Kisame Hoshigaki.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500">Fight with Sasuke</h3>
            <p>Faced Sasuke in an emotional, decisive battle. Only after his death was the truth of his sacrifice revealed.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
        {/* <section id="gallery" className="py-20 flex flex-col items-center gap-8 px-6 bg-black">
            <h2 className="text-3xl font-bold text-red-600">Gallery</h2>
            <p className="max-w-3xl text-center text-gray-300">
                A glimpse into the life of <span className="text-red-500 font-semibold">Itachi Uchiha</span>. 
                From his childhood as a prodigy, to his days in the ANBU, to his role in the Akatsuki — each 
                moment reflects his sacrifice and unshakable resolve. Below are some iconic scenes that 
                capture the essence of his journey.
            </p> */}

            {/* Responsive Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {[ 
                { img: profilePic2, caption: "Young Itachi — A prodigy who graduated the academy at 7 and became ANBU captain by 13." },
                { img: profilePic3, caption: "The Mangekyō Sharingan awakened — his tragic power shaped by loss and duty." },
                { img: profilePic4, caption: "Itachi’s time in Akatsuki — carrying the weight of a spy, yet feared as a rogue ninja." },
                { img: profilePic11, caption: "The Uchiha massacre — a night of betrayal, sorrow, and sacrifice." },
                { img: profilePic22, caption: "Brotherly bond — every action tied to Sasuke, even if it meant becoming a villain." },
                { img: profilePic33, caption: "Final battle with Sasuke — the truth revealed only after his death." }
                ].map((item, i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden shadow-lg">
                    <img src={item.img} alt={`Itachi scene ${i+1}`} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
                    <p className="text-sm text-gray-200 text-center">{item.caption}</p>
                    </div>
                </div>
                ))}
            </div>
        </section> */}

        <Gallery 
            images={[
                { img: profilePic2, caption: "Young Itachi — A prodigy who graduated the academy at 7 and became ANBU captain by 13." },
                { img: profilePic3, caption: "The Mangekyō Sharingan awakened — his tragic power shaped by loss and duty." },
                { img: profilePic4, caption: "Itachi’s time in Akatsuki — carrying the weight of a spy, yet feared as a rogue ninja." },
                { img: profilePic11, caption: "The Uchiha massacre — a night of betrayal, sorrow, and sacrifice." },
                { img: profilePic22, caption: "Brotherly bond — every action tied to Sasuke, even if it meant becoming a villain." },
                { img: profilePic33, caption: "Final battle with Sasuke — the truth revealed only after his death." }
            ]}
            />



      {/* Quotes */}
      <section id="quotes" className="flex flex-col justify-center items-center text-center bg-gray-950 py-20 px-6 gap-6">
        <h2 className="text-3xl font-bold text-red-600">Famous Quotes</h2>
        <div className="max-w-3xl flex flex-col gap-8">
          {[
            "Those who cannot acknowledge themselves will eventually fail.",
            "People live their lives bound by what they accept as correct and true.",
            "Even the strongest of opponents always has a weakness.",
            "You and I are flesh and blood. I am always going to be there for you, even if it’s only as an obstacle for you to overcome.",
            "No matter how powerful you become, never try to shoulder everything alone."
          ].map((quote, i) => (
            <p key={i} className="italic text-gray-300 text-lg">“{quote}”</p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Body
