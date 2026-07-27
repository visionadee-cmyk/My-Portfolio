import './Videography.css'

function Videography() {
  const videos = [
    { src: '/video/Beach_BBQ_Dinner1.mov', title: 'Beach BBQ Dinner', description: 'Special beachside dining experience showcase' },
    { src: '/video/community_food_print.mp4', title: 'Local Island Foot Print', description: 'Building Relations with locals' },
    { src: '/video/fareast_upscale.mp4', title: 'Fareast Restaurant Upscale', description: 'Restaurant renovation and upgrade showcase' },
    { src: '/video/FBS_GM_farewell.mp4', title: 'F&B Service GM Farewell', description: 'Special farewell event coverage' },
    { src: '/video/Full_Moon_BBQ_Dinner1.mov', title: 'Full Moon BBQ Dinner', description: 'Special moonlight dining event' },
    { src: '/video/gloaming_gathering.mov', title: 'Gloaming Gathering', description: 'Sunset social event coverage' },
    { src: '/video/GM__speeach1.mov', title: "General Manager's Address", description: 'Corporate communication video' },
    { src: '/video/independence.mov', title: 'Independence Day Celebration', description: 'National day event coverage' },
    { src: '/video/lets_go_.mov', title: "Let's Go Series - Main", description: 'COVID-era social media campaign' },
    { src: '/video/lers_go_2.mov', title: "Let's Go Series - Episode 2", description: 'Guest engagement series' },
    { src: '/video/lers_go_3.mov', title: "Let's Go Series - Episode 3", description: 'Social media content' },
    { src: '/video/lers_go_4.mov', title: "Let's Go Series - Episode 4", description: 'Virtual tour series' },
    { src: '/video/lers_go_5.mov', title: "Let's Go Series - Episode 5", description: 'Property showcase' },
    { src: '/video/lers_go_6.mov', title: "Let's Go Series - Episode 6", description: 'Final episode showcase' },
    { src: '/video/Maabinhura_.mov', title: 'Maabinhura Kitchen Project', description: 'New kitchen concept and design' },
    { src: '/video/New_Normal_dining.mov', title: 'New Normal Dining', description: 'Post-COVID dining protocols' },
    { src: '/video/self_confidence.mp4', title: 'Self Confidence Training', description: 'Staff development program' },
    { src: '/video/sc.mp4', title: 'Self Confidence - Module 1', description: 'Professional development series' },
    { src: '/video/sc2.mp4', title: 'Self Confidence - Module 2', description: 'Communication skills training' },
    { src: '/video/sc5.mp4', title: 'Self Confidence - Module 5', description: 'Leadership development' },
    { src: '/video/table_clearance.mp4', title: 'Table Service Training', description: 'F&B service standards' },
    { src: '/video/wine_tour.mov', title: 'Wine Cellar Tour', description: 'Premium wine collection showcase' },
    { src: '/video/wish_you_were_here.mov', title: 'Wish You Were Here - Main', description: 'COVID-era guest engagement series' },
    { src: '/video/wish_you_were_here_21.mov', title: 'Wish You Were Here - Episode 2', description: 'Virtual property tour' },
    { src: '/video/wish_you_were_here_3.mov', title: 'Wish You Were Here - Episode 3', description: 'Resort lifestyle showcase' },
    { src: '/video/wish_you_were_here_4.mov', title: 'Wish You Were Here - Episode 4', description: 'Destination highlights' },
    { src: '/video/wish_you_were_here_5.mov', title: 'Wish You Were Here - Episode 5', description: 'Resort activities showcase' },
    { src: '/video/wish_you_were_here_6.mov', title: 'Wish You Were Here - Episode 6', description: 'Final episode highlights' },
    { src: '/video/Welcome_Home.mp4', title: 'Welcome Home', description: 'Special welcome event' },
    { src: '/video/Sebs_Farm_Jouney.mp4', title: "Seb's Farm Journey", description: 'Farm-to-table experience' },
    { src: '/video/Raaya_by_Atmosphere_Opening.mp4', title: 'Raaya by Atmosphere Opening', description: 'Grand opening event' },
    { src: '/video/flairing.mp4', title: 'Flairing', description: 'Bartender flair performance' },
    { src: '/video/sc1.mp4', title: 'Self Confidence - Module 1 (Alt)', description: 'Staff training session' },
    { src: '/video/sc3.mp4', title: 'Self Confidence - Module 3', description: 'Staff training session' },
    { src: '/video/sc4.mp4', title: 'Self Confidence - Module 4', description: 'Staff training session' }
  ]

  return (
    <div style={{ width: '100%', padding: '4rem 1.5rem', overflowX: 'hidden', maxWidth: 'none' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Videography Projects</h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Creative video content for events, promotions, and training</p>
      </div>

      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1rem' }}>
        {videos.map((video, index) => (
          <div key={index} style={{ background: '#ffffff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', border: '1px solid #e2e8f0', transition: 'all 0.2s ease' }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#f1f5f9', overflow: 'hidden' }}>
              <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#1e293b' }}>{video.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videography
