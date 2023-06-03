import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-full w-full p-3">
        <div className="h-2/5 rounded-md p-2 flex justify-center items-center mt-2">
          <Image src="/2.png" alt="3" width={500} height={500} />
        </div>
        <div className="absolute bottom-2">
          <div className="h-2/5  bg-green-600 rounded-md p-2 flex justify-center items-center">
            <Image src="/1.png" alt="1" width={100} height={100} />
            <div className="w-1/2">
              <h1 className="text-center text-white text-xl sm:text-5xl display-font">
                Join <span className="">P2P</span> for unforgettable Events and
                Experience!
              </h1>
            </div>
            <Image
              src="/3.png"
              alt="3"
              width={100}
              height={100}
              className="relative bottom-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
