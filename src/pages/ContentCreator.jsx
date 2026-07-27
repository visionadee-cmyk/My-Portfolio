import { Link } from 'react-router-dom'
import './ContentCreator.css'

function ContentCreator() {
  const contentItems = [
    {
      image: '/Images/Blender_Image_(1).jpg',
      title: '3D Architectural Design',
      description: 'Visualizing spaces with Blender & CorelDRAW',
      link: '/architecture-3d'
    },
    {
      image: '/Images/logo_(1).jpg',
      title: 'Graphic Design Services',
      description: 'Logos, banners, and marketing materials',
      link: '/graphic-design'
    },
    {
      image: '/Images/FRESH_TRACK_PRO.jpg',
      title: 'FreshTrack Pro Web App',
      description: 'Produce business management system',
      link: '/webapps'
    },
    {
      image: '/Images/Audience.jpg',
      title: 'Engaging Videography',
      description: 'Showcasing events and experiences',
      link: '/videography'
    },
    {
      image: '/Images/Landscape_(1).jpg',
      title: 'Creative Photography',
      description: 'Landscapes, portraits, and event captures',
      link: '/photography'
    },
    {
      image: '/Images/International_Womens_Day_(11).jpg',
      title: 'Content Creation',
      description: 'Engaging digital content and storytelling',
      link: '/projects'
    }
  ]

  const externalProjects = [
    {
      image: '/Images/banners.jpg',
      title: 'Maldivian Independence Site',
      description: 'Website for the 60th Anniversary',
      externalLink: '#'
    },
    {
      image: '/Images/SSOM.jpg',
      title: 'Whistleblower Protection Site',
      description: 'Secure platform for reporting',
      externalLink: '#'
    },
    {
      image: '/Images/Sebs_Shack.png',
      title: 'Ungu Viyafaari',
      description: 'Online marketplace platform',
      externalLink: 'https://un-gu-viyafaari.web.app'
    },
    {
      image: '/Images/Sebs_farm.jpg',
      title: 'Gaaahaka Returns 1446',
      description: 'Festival ticketing system',
      externalLink: 'https://gaahaka-returns-1446.web.app/'
    },
    {
      image: '/Images/Worldbuilding-Mindmap.jpg',
      title: 'Fuel Express Time & Attendance',
      description: 'Time and attendance tracking system',
      externalLink: 'https://fuel-express-time-attendance.web.app/dashboard.html'
    },
    {
      image: '/Images/Rettey_(1).jpg',
      title: 'Junior Joy HR Pro',
      description: 'Happy Teams, Smarter HR',
      externalLink: 'https://juniorjoy-hr-pro.netlify.app/'
    }
  ]

  const facebookPages = [
    {
      id: '61570473594905',
      title: 'Ufanveli Shop',
      description: 'A retail experience by Madihaa | Est 1985',
      link: 'https://www.facebook.com/profile.php?id=61570473594905',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/518194550_122148309758682453_5247025615340316809_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ER535drXMbwQ7kNvwEfRLtc&_nc_oc=AdqmDudkdIceR2RQc_ZB0h-3D1dnGN2lFa43UlQLe7goHHJSh8t0ScU-VIOC9g7wMMo&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=j3BLqyHH8qEkDlB4Obt4cg&_nc_ss=7b2a8&oh=00_AQAyexRquk_orPrtLZbJjYzX-znQ81GiR60ikYmB7FDnZw&oe=6A6CF535'
    },
    {
      id: '61590504496612',
      title: 'Hawaiin Elevation',
      description: 'Reliable maintenance solutions for your home or office. We specialize in plumbing, electrical work, and general repairs in Malé, Hulhumalé, and Villingili.',
      link: 'https://www.facebook.com/profile.php?id=61590504496612',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/724590230_27259933897006453_7922741029685124098_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Lu1ZIF_4dhMQ7kNvwGliGH7&_nc_oc=Adr-a2xXWI_2Kuvj2YHR8zzC4t3SqUSvu6252En0362LO2m2mOP1Cbp7YzXGo0LrPuE&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=OMiZpWRuBLv8s5IVwTYQJw&_nc_ss=7b2a8&oh=00_AQBTVlIipEXh2Hmem0k8s71w3zGiqyn3iTfjagdSgWIOwg&oe=6A6CDD3B'
    },
    {
      id: '61591142210184',
      title: 'Loavashi Hub',
      description: '🌊 Taste of All Times. Serving premium flaky paratas, juicy grilled chicken, and fresh café favorites.',
      link: 'https://www.facebook.com/profile.php?id=61591142210184',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/722364449_27266654563001053_5921621525879137555_n.jpg?stp=dst-jpg_tt6&cstp=mx566x552&ctp=s566x552&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=00UOnB6FQPcQ7kNvwHzrUq6&_nc_oc=AdrWYWPBKwlYKOjdxuiOJrKbEMA3GXxe9QlpEnvpLFaiczTsQ5itybYd10kxZsliMDE&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=QfkED9vnf6eOGW9dY9A8Bw&_nc_ss=7b2a8&oh=00_AQAswCFRWnB66OH3lDW3IzaQMSwp8D6h3Bx5w1gplnt3wg&oe=6A6CD3DC'
    },
    {
      id: '61591447331907',
      title: "Un'gu Viyafaari",
      description: 'A platform where talented Maldivians can showcase and sell homemade products online. From delicious food and snacks to handmade crafts, beauty products, baked items, gifts, and more.',
      link: 'https://www.facebook.com/profile.php?id=61591447331907',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/741036970_27484118287921345_3513629188332266072_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=A3ymO7aLKL4Q7kNvwGsNE4n&_nc_oc=AdouiHfval1joztCsVMTEztFav6Wa78x3ifd9Yc2gwk1YXI7cWOOgR8F2J5bCPEZPOs&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=Hr6Tog1A0m4qWr6_RUVGsg&_nc_ss=7b2a8&oh=00_AQCiFNTOkdXfmSIIeCcMqbaCBYZWVomLurTSjjPq6a-O0w&oe=6A6CD8F8'
    },
    {
      id: '61575611513593',
      title: 'Hawwa Sales',
      description: '🇲🇻 Your trusted online shop for authentic products! From crafts to fashion, we deliver quality with island charm. Order via WhatsApp: +960 979-5529. Free delivery in Malé!',
      link: 'https://www.facebook.com/profile.php?id=61575611513593',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/491700553_9639329329493515_115437734763808341_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1154&ctp=s2048x1154&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OQjKe7Wcr7IQ7kNvwFzWFDe&_nc_oc=AdpEzTdK38AUMFUoKfP9EOius3pyrSSsspEwxPEbxF4sz1Im7t39BbVtWWw99owbL5I&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=Nsb2wn6Jwae1Q2lZiQeIng&_nc_ss=7b2a8&oh=00_AQAXJvVf1deSE6D4jDBqjkVdfid4DcdocYyGKHfABrZQ5A&oe=6A6CECB0'
    },
    {
      id: '61591869200851',
      title: 'Hawa Daily',
      description: '🇲🇻 Bringing Maldives news to your screen — breaking updates, island stories, community voices, and news that matters.',
      link: 'https://www.facebook.com/profile.php?id=61591869200851',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/752924070_122106417363395640_3319543999419068365_n.jpg?stp=dst-jpg_tt6&cstp=mx1419x1419&ctp=s1419x1419&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0Yp3-FGTaKEQ7kNvwGCyURB&_nc_oc=AdoihMSiIrm2M8rTIe383es4iQ_OTlGWVp-hCSxMpFEZ2DXKYX5_Hovu0Yz_l8B33CM&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=t2k9UYq9ss8zDAefznuS6A&_nc_ss=7b2a8&oh=00_AQAXAmQTSpqI39f3JQR33kKg_azZ25sQlHh4NJxMNkzQwQ&oe=6A6D016A'
    },
    {
      id: '61591452423429',
      title: 'Andhaasee Hisaab',
      description: 'Connecting workers and employers across the Maldives. Post job requirements, find skilled workers, discover job opportunities. Building trusted connections for everyone.',
      link: 'https://www.facebook.com/profile.php?id=61591452423429',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/734896796_27425004047166103_6643310487286194928_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5UErpT2vX9wQ7kNvwEgLfhw&_nc_oc=Ado_BFHJ8SkHTO8Z32GEEL5PcsvkwqJIKmFrwzhFeWSfqXgLjGLZXCwTe9dL6qQcUj8&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=RClmmOzzjcjsA5i9A8gpqQ&_nc_ss=7b2a8&oh=00_AQBkne9edJcBT3grloJAAURLT7QNm1enpXQcaMKLcqAP4Q&oe=6A6CF13C'
    },
    {
      id: '61560218368641',
      title: 'Fannu Bazaar',
      description: 'Maldives\' trusted professional community. Find reliable professionals. Simple, fast, and trusted.',
      link: 'https://www.facebook.com/profile.php?id=61560218368641',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/678590784_26619661991033650_4523785293125129369_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HjEn5gGkTIgQ7kNvwEdmxYt&_nc_oc=Adq84O9A5hxGRXGhWLg6bgbDq5HxNxMSv96YHrWVSbxtSdhVBkLXO9iqWoj80iKfQMM&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=_2GJpgz2b59gKYRHAoG43Q&_nc_ss=7b2a8&oh=00_AQAOOXydc8esgiRgdsEQvjCdmDYM7keURFV7B1t23C0HCA&oe=6A6CFEEB'
    },
    {
      id: '61561849776709',
      title: 'Junior Joy Shipping',
      description: 'Bringing joy to your doorstep! Discover a world of high-quality children\'s clothing, toys, books, and accessories. Shop with ease and delight in every purchase!',
      link: 'https://www.facebook.com/profile.php?id=61561849776709',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/458396715_122112698720394992_8331552404655880605_n.jpg?stp=dst-jpg_tt6&cstp=mx500x500&ctp=s500x500&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gDU9K3DGjhUQ7kNvwHDlWYx&_nc_oc=Adq3R4KcDGvSnO202eylq9VwoF9iFN9V8iKxOLkH-_nzwJre0P6qO1WCpGbjP51j5dU&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=h8roQRUGB7FSHmAOMwdVpw&_nc_ss=7b2a8&oh=00_AQDL-DjyfUGylDgWGbk0npr5ptr1sT19jr3jk0Cd5xEpyg&oe=6A6CE7BC'
    },
    {
      id: 'juniorjoyco',
      title: 'Junior Joy Co.',
      description: 'Bringing joy to your doorstep! Shop with ease and delight in every purchase!',
      link: 'https://www.facebook.com/JuniorJoyco/',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-6/444761263_122150055650185361_1034847945778452706_n.jpg?stp=dst-jpg_tt6&cstp=mx500x500&ctp=s500x500&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_jvTgilhHwYQ7kNvwEsw4m7&_nc_oc=AdpP3r_iSC20Hd81_EGSCwXdoR61CSU8YBTULxQrGv3oKUPCi2kgzJJ4jPoNth59TqU&_nc_zt=23&_nc_ht=scontent.fmle2-2.fna&_nc_gid=Vh_LF4hMjrLYCDh-TDcFuw&_nc_ss=7b2a8&oh=00_AQD3PiN4c3nfd8Okqsm73ztJNBPDDOXy85lMAxDQxH38-A&oe=6A6CEBDA'
    },
    {
      id: '100066406525371',
      title: 'Hinnavaru Thaara Group',
      description: 'We do traditional drumming, singing, and dancing. Our aim is to entertain people and to maintain our beloved traditional culture.',
      link: 'https://www.facebook.com/profile.php?id=100066406525371',
      image: 'https://scontent.fmle2-2.fna.fbcdn.net/v/t39.30808-1/300381267_419790540244493_1449004487854180684_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s200x200&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=bXLE9gHjvecQ7kNvwHeIrer&_nc_oc=Ado2AKJcxGX2aBHApKDOFpTw_Jb8b9g5XxYb4bzRLv6xss8igq_-bv4C0_rWsfJxEeM&_nc_zt=24&_nc_ht=scontent.fmle2-2.fna&_nc_gid=A-z_tq-BaXxDbH8TJkVn0g&_nc_ss=7b2a8&oh=00_AQBDDG_0oaHWddKZYWCBXSDycG23Bcjmmsk1bYbpP1xgtA&oe=6A6CD170'
    }
  ]

  return (
    <div className="content-creator-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Content Creation Portfolio</h1>
          <p className="page-subtitle">Sharing expertise in hospitality, food & beverage, and design through engaging content</p>
        </div>

        <div className="platform-section">
          <h2 className="section-title">Social Media Presence</h2>
          <div className="platform-grid">
            <div className="platform-card tiktok-card animate-scale-in">
              <div className="platform-header">
                <i className="fab fa-tiktok platform-icon"></i>
                <h3>TikTok</h3>
              </div>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">3.2K</div>
                  <div className="stat-label">Followers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3.9K</div>
                  <div className="stat-label">Likes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">182K</div>
                  <div className="stat-label">Video Views</div>
                </div>
              </div>
              <p className="platform-description">JoyfulReCreative: T-shirts, mugs & more! Explore on Etsy.</p>
              <a href="https://vt.tiktok.com/ZSkeS58kf/" className="cta-button" target="_blank" rel="noopener noreferrer">
                Visit Channel <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Featured Content Highlights</h2>
          <div className="content-grid">
            {contentItems.map((item, index) => (
              <Link key={index} to={item.link} className="content-item-link animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="content-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="content-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="view-more-cta">View More <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="external-projects-section">
          <h2 className="section-title">External Projects & Websites</h2>
          <div className="content-grid">
            {externalProjects.map((item, index) => (
              <a 
                key={index} 
                href={item.externalLink} 
                className="content-item-link animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="content-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="view-more-cta">Visit Site <i className="fas fa-external-link-alt"></i></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="facebook-section">
          <h2 className="section-title">Facebook Pages</h2>
          <div className="facebook-grid">
            {facebookPages.map((page, index) => (
              <a 
                key={index} 
                href={page.link} 
                className="facebook-card animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="facebook-card-header">
                  {page.image ? (
                    <div className="facebook-image">
                      <img src={page.image} alt={page.title} loading="lazy" />
                    </div>
                  ) : (
                    <div className="facebook-icon">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                  )}
                </div>
                <div className="facebook-content">
                  <h4>{page.title}</h4>
                  <p>{page.description}</p>
                  <span className="facebook-cta">Visit Page <i className="fas fa-external-link-alt"></i></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCreator
