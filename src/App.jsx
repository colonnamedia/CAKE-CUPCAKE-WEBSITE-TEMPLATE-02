import { ArrowRight, CalendarDays, Instagram, MapPin, Menu, Sparkles, Star } from 'lucide-react';

const cakes = [
  {title:'Signature Cakes', text:'Modern celebration cakes designed around your colors, story and guest count.', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85'},
  {title:'Cupcake Collections', text:'Small-batch cupcakes with polished finishes for parties, showers and gifting.', image:'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1200&q=85'},
  {title:'Wedding Cakes', text:'Elegant tiered cakes with custom tastings, delivery and setup for your day.', image:'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=85'}
];

const flavors = ['Vanilla Bean + Raspberry','Chocolate Espresso','Lemon Berry','Funfetti Cream','Red Velvet','Salted Caramel'];

export default function App(){
  return <div className="site">
    <header className="nav">
      <a className="brand" href="#top"><span>Butter</span><b>& Bloom</b></a>
      <nav className="links"><a href="#cakes">Cakes</a><a href="#flavors">Flavors</a><a href="#about">Our Studio</a><a href="#contact">Contact</a></nav>
      <a className="navCta" href="#contact">Start an Order <ArrowRight size={17}/></a>
      <button className="menu" aria-label="Open menu"><Menu/></button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="heroMedia"><img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1800&q=90" alt="Elegant custom cake"/><div className="wash"/></div>
        <div className="heroCopy">
          <p className="eyebrow"><Sparkles size={15}/> Made for the moments you keep</p>
          <h1>Beautiful cakes.<br/><em>Unforgettable celebrations.</em></h1>
          <p className="lede">Custom cakes and cupcakes made from scratch, styled with intention, and designed to feel as special as the reason you’re celebrating.</p>
          <div className="heroActions"><a className="primary" href="#contact">Design Your Cake <ArrowRight size={18}/></a><a className="textLink" href="#cakes">Explore the menu</a></div>
          <div className="proof"><span><Star size={16} fill="currentColor"/> 4.9 local rating</span><span>•</span><span>Custom-made in small batches</span></div>
        </div>
        <div className="heroCard"><span>Now booking</span><strong>Fall celebrations + 2027 weddings</strong><a href="#contact">Check your date <CalendarDays size={17}/></a></div>
      </section>

      <section className="intro" id="cakes">
        <p className="sectionTag">The sweet side of your celebration</p>
        <div className="introGrid"><h2>Not just dessert.<br/>A centerpiece.</h2><p>Every order starts with your occasion, your style and the feeling you want to create. We pair polished design with genuinely delicious cake so your table looks incredible and your guests remember every bite.</p></div>
      </section>

      <section className="cards">
        {cakes.map((c,i)=><article className="cakeCard" key={c.title}><div className="cardImage"><img src={c.image} alt={c.title}/><span>0{i+1}</span></div><div className="cardBody"><h3>{c.title}</h3><p>{c.text}</p><a href="#contact">Learn more <ArrowRight size={16}/></a></div></article>)}
      </section>

      <section className="feature" id="about">
        <div className="featureImage"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85" alt="Baker finishing a custom cake"/></div>
        <div className="featureCopy"><p className="sectionTag">Made by hand</p><h2>A little luxury,<br/>made personal.</h2><p>Butter & Bloom is a boutique bake studio built around thoughtful details: balanced flavors, modern finishes, clear communication and an ordering experience that feels easy from the first idea to pickup or delivery.</p><div className="miniStats"><div><b>48 hr</b><span>typical inquiry response</span></div><div><b>6+</b><span>signature flavor pairings</span></div><div><b>1:1</b><span>custom design process</span></div></div></div>
      </section>

      <section className="flavors" id="flavors">
        <div><p className="sectionTag">Flavor first</p><h2>Choose your favorite.<br/>Then make it yours.</h2></div>
        <div className="flavorList">{flavors.map((f,i)=><div key={f}><span>0{i+1}</span><strong>{f}</strong><ArrowRight size={17}/></div>)}</div>
      </section>

      <section className="quote"><span>“</span><blockquote>Our cake looked like it belonged in a magazine — and somehow tasted even better than it looked.</blockquote><p>— Recent celebration client</p></section>

      <section className="contact" id="contact">
        <div><p className="sectionTag">Let’s make something beautiful</p><h2>Tell us what<br/>you’re celebrating.</h2><p>Share your date, guest count, inspiration and what you’re craving. We’ll follow up with availability and next steps.</p><div className="contactMeta"><span><MapPin size={17}/> Your City, PA</span><span><Instagram size={17}/> @butterandbloombakes</span></div></div>
        <form onSubmit={e=>e.preventDefault()}><div className="row"><label>Name<input placeholder="Your name"/></label><label>Email<input type="email" placeholder="you@email.com"/></label></div><div className="row"><label>Event date<input type="date"/></label><label>What are you planning?<select defaultValue=""><option value="" disabled>Select one</option><option>Birthday / Celebration</option><option>Wedding</option><option>Shower</option><option>Corporate / Gifting</option></select></label></div><label>Tell us about it<textarea rows="5" placeholder="Guest count, colors, flavors, inspiration..."></textarea></label><button className="primary" type="submit">Send My Inquiry <ArrowRight size={18}/></button></form>
      </section>
    </main>
    <footer><a className="brand" href="#top"><span>Butter</span><b>& Bloom</b></a><p>Custom cakes + cupcakes for life’s sweetest reasons.</p><span>© 2026 Butter & Bloom. Website template.</span></footer>
  </div>
}
