import {Helmet} from "react-helmet";

export default function Purchase() {
  return (
    
    <div className="flex justify-center">
      <Helmet>
        <script src="https://shoppy.gg/api/embed.js" type="text/javascript" />
      </Helmet>
      <div className="flex-col">
        <h1 className="flex text-6xl font-bold justify-center mb-5">Purchase</h1>
        <h2 className="flex text-3xl justify-center mb-7 text-main-700">Choose your build</h2>
        <div className="flex flex-row gap-10">
          <div className="card w-80 bg-base-200 shadow-2xl">
            <div className="flex card-body">
              <p className="flex justify-center mb-0">
                <span className="text-4xl">Game</span><span className="text-4xl text-main-700">Sense</span>
              </p>
              <p className="flex text-3xl justify-center font-bold text-main-700">Live</p>
              <div className="divider"></div> 
              <div className="card-features text-l">
                <p>▪ Best Anti-aim</p>
                <p>▪ Instant DoubleTap</p>
                <p>▪ Superior experience</p>
              </div>
              <div className="divider"></div> 
              <div className="card-features text-l text-gray-400">
                <p>▫ Lifetime support</p>
                <p>▫ Regular updates</p>
                <p>▫ Superior experience</p>
              </div>
              <div className="divider"></div> 
              <p className="flex text-5xl mb-5 justify-center">19.99€</p>
              <div className="card-actions justify-center">
                <button data-shoppy-product="*YOUR PRODUCT ID HERE*" className="btn text-main-700">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-200 shadow-2xl">
            <div className="flex card-body">
              <p className="flex justify-center mb-0">
                <span className="text-4xl">Game</span><span className="text-4xl text-main-700">Sense</span>
              </p>
              <p className="flex text-3xl justify-center font-bold text-main-700">Beta</p>
              <div className="divider"></div> 
              <div className="card-features text-l">
                <p>▪ Best Anti-aim</p>
                <p>▪ Instant DoubleTap</p>
                <p>▪ Superior experience</p>
              </div>
              <div className="divider"></div> 
              <div className="card-features text-l text-gray-400">
                <p>▫ Lifetime support</p>
                <p>▫ Early access updates</p>
                <p>▫ Superior experience</p>
              </div>
              <div className="divider"></div> 
              <p className="flex text-5xl mb-5 justify-center">39.99€</p>
              <div className="card-actions justify-center">
                <button data-shoppy-product="*YOUR PRODUCT ID HERE*" className="btn text-main-700">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-200 shadow-2xl">
            <div className="flex card-body">
              <p className="flex justify-center mb-0">
                <span className="text-4xl">Game</span><span className="text-4xl text-main-700">Sense</span>
              </p>
              <p className="flex text-3xl justify-center font-bold text-main-700">Alpha</p>
              <div className="divider"></div> 
              <div className="card-features text-l">
                <p>▪ Best Anti-aim</p>
                <p>▪ Instant DoubleTap</p>
                <p>▪ Superior experience</p>
              </div>
              <div className="divider"></div> 
              <div className="card-features text-l text-gray-400">
                <p>▫ Lifetime support</p>
                <p>▫ Developer versions</p>
                <p>▫ Superior experience</p>
              </div>
              <div className="divider"></div> 
              <p className="flex text-5xl mb-5 justify-center">79.99€</p>
              <div className="card-actions justify-center">
                <button data-shoppy-product="*YOUR PRODUCT ID HERE*" className="btn text-main-700">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}