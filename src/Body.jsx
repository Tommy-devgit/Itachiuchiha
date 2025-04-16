import profilePic from "../src/images/itachi-card.jfif"
import profilePic11 from "../src/images/headers/aea4e075-d170-4fc2-b9b9-07993fa7c884.jfif"
import profilePic22 from "../src/images/headers/bc3d3aac-a067-4fb7-bfea-0a5d0fae5495.jfif"
import profilePic33 from "../src/images/headers/da256543-acae-48c6-b680-3ecd624647f8.jfif"
import profilePic2 from "../src/images/features/𝙄𝙩𝙖𝙘𝙝𝙞 𝙐𝙘𝙝𝙞𝙝𝙖.jfif"
import profilePic3 from "../src/images/features/b9ab6de6-a205-4c6c-8d5d-ed2ff261712f.jfif"
import profilePic4 from "../src/images/features/itachi.jfif"

function Body(){
    return(<>
        <section>
            <div className="card">
                <img className="card-image" src= {profilePic} alt="Profile Picture" />
                <h2 className="card-title" >ITACHI UCHIHA</h2>
                <p>Itachi Uchiha is a character in the Naruto manga and anime series created by Masashi Kishimoto. Itachi is the older brother of Sasuke Uchiha,  and is responsible for killing all the  members of their clan, sparing only Sasuke.</p>
            </div>
        </section>
        <section>
            <div className="sec1">
                <img src={profilePic11} alt="" />
                <p>Itachi Uchiha was a prodigy of the Uchiha clan, known for his exceptional intellect, combat skills, and mastery of the Sharingan. From a young age, he displayed abilities far beyond his peers, earning the rank of Anbu captain at just 13. However, his life took a tragic turn when he was forced to make an impossible choice—to annihilate his own clan to prevent a civil war that could have destroyed Konoha.</p>
            </div>
            <div className="sec1">
                <p className="paragraphs">Despite being seen as a villain for much of the series, Itachi’s true motives were later revealed. He sacrificed everything, including his own reputation, to protect his younger brother, Sasuke, and maintain peace in the village. His battle with Sasuke was not only a test of strength but also a carefully orchestrated plan to pass on his power and ensure his brother's growth.</p>
                <img src={profilePic22} alt="" />
            </div>
            <div className="sec1">
                <img src={profilePic33} alt="" />
                <p>Itachi's story is one of sacrifice, deception, and deep emotional complexity. He lived as a villain in the eyes of the world but remained a hero in the shadows, carrying the burden of his actions alone. His legacy continues to influence the shinobi world, teaching valuable lessons about duty, love, and the cost of peace.</p>
            </div>
        </section>
        <section>
            <div className="franchise">
                <img src={profilePic2} alt="" />
                <img src={profilePic3} alt="" />
                <img src={profilePic4} alt="" />
            </div>
        </section>
        <section className="large-thumb">
            {/* SHARINGAN
            MANGEKYOU SHARINGAN
            ETERNAL MANGEKYOU SHARINGAN
            RINNEGAN (an evolved form of Sharingan)
            SUSANOO (a technique accessed through the Mangekyō Sharingan)
            TSUKUYOMI (a Mangekyō Sharingan genjutsu)
            AMATERASU (a Mangekyō Sharingan technique)
            KAGUTSUCHI (manipulation of Amaterasu flames, unique to Sasuke)
            KOTOAMATSUKAMI (a powerful genjutsu unique to Shisui Uchiha) */}

            <h1>SHARINGAN</h1>
            <h1>MANGEKYOU SHARINGAN</h1>
            <h1>ETERNAL MANGEKYOU SHARINGAN</h1>
            <h1>SUSANOO</h1>
            <h1>TSUKUYOMI</h1>
            <h1>AMATERASU</h1>
            <h1>KAGUTSUCHI</h1>
            <h1>KOTOAMATSUKAMI</h1>
        </section>
        <section>
            <div className="videos">
                <video autoPlay controls loop muted src="../src/videos/Find 'itachi uchiha edit' on TikTok - TikTok Search.mp4" width={200}></video>
                <video autoPlay controls loop muted src="../src/videos/Find 'itachi uchiha edit' on TikTok - TikTok Search_2.mp4" width={200}></video>
                <video autoPlay controls loop muted src="../src/videos/Find 'itachi uchiha edit' on TikTok - TikTok Search_3.mp4" width={200}></video>
            </div>
        </section>
    </>);
}

export default Body;