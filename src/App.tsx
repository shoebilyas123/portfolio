import './App.css';
import Socials from './ui/socials';
import Layout from './ui/layout';

function App() {
  return (
    <Layout>
      <Socials />
      <div className="w-full ml-auto flex flex-row items-center justify-center">
        <div>
          <div className="home-title flex flex-col mb-2">
            <div className="flex flex-row items-center space-x-2">
              <span className="text-md">hi, my name is </span>
              <span className="text-9xl my-name">SHOEB ILYAS</span>
            </div>
            <span className="text-md">I am a full stack developer</span>
          </div>
          <div className="text-xl home-skills-tagline">
            MERN | DevOps | Open Source
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
