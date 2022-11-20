export default function Terms() {
  return (
    <div className="flex hero bg-base-100 justify-center">
      <div className="hero-content bg-base-200 shadow-xl rounded-3xl top-0">
        <div className="w-md">
          <h1 className="flex text-5xl font-bold justify-center">Terms of Service</h1>
          <p className="flex py-2 text-xl text-left">By purchasing or using our lua, you agree to the following terms:</p>
          <div className="ml-4 text-lg mb-5">
            <p className="">▪ NO refunds will be given</p>
            <p className="">▪ You DO NOT attempt to leak/crack/reverse engineer the lua</p>
            <p className="">▪ You agree that we may remove your access without a given reason</p>
            <p className="">▪ We may change the ToS at any time</p>
          </div>
          <p className="font-bold text-xl text-center">Failing to comply with the ToS will result in your access being revoked </p>
        </div>
      </div>
    </div>
  );
}