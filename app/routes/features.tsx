export default function Features() {
  return (
    <div className="flex flex-col m-auto max-w-4xl">
      <h1 className="flex text-6xl font-bold justify-center mb-5">Features</h1>
      <div className="flex hero w-xl bg-base-200 ">
        <div className="flex hero-content flex-col lg:flex-row justify-center">
          <img src="https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Easy to use features!</h1>
            <p className="pt-6">No complicated bullshit.</p>
            <p className="">Customize your anti-aim.</p>
            <p className="pb-6">No complicated bullshit.</p>
          </div>
        </div>
      </div>
      <div className="flex hero bg-base-200 w-xl">
        <div className="flex hero-content flex-col lg:flex-row-reverse">
          <img src="https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Beautiful indicators</h1>
            <p className="pt-6">Everyone has nice indicators, right?</p>
          </div>
        </div>
      </div>
    </div>
  );
}