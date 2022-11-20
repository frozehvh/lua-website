import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lua website</h1>
            <p className="pt-6">Purchase premium lua here.</p>
            <p className="pb-6">Be creative lol.</p>
            <button className="btn btn-primary"><NavLink to="/features" className="selected">Get started</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
}
