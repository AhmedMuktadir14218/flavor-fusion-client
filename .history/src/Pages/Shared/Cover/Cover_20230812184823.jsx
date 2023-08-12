

const Cover = (img,title) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url("${img}")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{}</h1>
      <p className="mb-5"></p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>            
        </div>
    );
};

export default Cover;