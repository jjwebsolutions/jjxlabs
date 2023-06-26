import "./glitch.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ml-3 justify-between p-24">
      <div className="hero-container">
        <div className="environment"></div>
        <h2 className="hero glitch layers" data-text="jjxlabs">
          <span>jjxlabs</span>
        </h2>
      </div>
    </main>
  );
}
