import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full divide-y">
      <Head>
        <title>Palamidas Olive Oil</title>
        <link rel="icon" href="/olive.png" />
      </Head>

      <header className="container mx-auto py-2 flex justify-between items-center">
        <Link href="/">
          <a>
            <img
              className="h-24"
              src="/palamidas_icon.png"
              alt="Palamidas Icon"
            />
          </a>
        </Link>
        <form
          className="flex justify-center space-x-2"
          onClick={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="search"
            id="search"
            className="focus:outline focus:border-green-700 focus:shadow-md border border-gray-300 rounded-sm py-2 px-4 appearance-none"
          />
          <button type="submit" className="bg-green-500 text-white py-2 px-4">
            Submit
          </button>
        </form>
        <div className="language">English</div>
      </header>
      <div className="container mx-auto">
        <nav className="py-4 flex justify-center space-x-4 uppercase font-semibold text-sm">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/company">
            <a>Company</a>
          </Link>
          <Link href="/">
            <a>Export</a>
          </Link>
          <Link href="/">
            <a>Products</a>
          </Link>
          <Link href="/">
            <a>Certificates</a>
          </Link>
          <Link href="/">
            <a>FAQ</a>
          </Link>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </nav>
      </div>

      <main className="container mx-auto py-4 flex flex-col justify-center space-y-12">
        <div className="carousel mx-auto">
          <img src="https://via.placeholder.com/500x500" alt="Placeholder" />
        </div>
        <div className="mt-12 space-y-2 info text-center">
          <p className="text-lg font-semibold">
            Real olive oil gives you health
          </p>
          <p className="text-5xl font-semibold">
            ``GOOD AGRICULTURAL PRACTICES``
          </p>
          <p className="w-6/12 mx-auto">
            Palamidas’ own gardens are operated within the scope of the Ministry
            of Agriculture and Livestock's ``GOOD AGRICULTURAL PRACTICES``. As
            Palamidas, we are proud to deliver firsthand the most natural and
            real cold-pressed natural extra virgin olive oil obtained from our
            gardens, which is under our control from the moment the olive falls
            into the first flower.
          </p>
        </div>
        <div className="browse-items container mx-auto flex justify-between">
          <img src="https://via.placeholder.com/300x500" alt="Placeholder" />
          <img src="https://via.placeholder.com/300x500" alt="Placeholder" />
          <img src="https://via.placeholder.com/300x500" alt="Placeholder" />
        </div>
        <div className="next-gen-info container mx-auto grid grid-cols-2 justify-center">
          <div className="info text-left space-y-4 mt-8">
            <p className="text-4xl font-semibold">
              Next-generation 2-phase Pressing Technology 100% Cold Pressed
            </p>
            <p className="leading-relaxed">
              It's not enough just to take good care of the trees to get good
              olive oil! Palamidas owns the German BRAND GEA Westfalia, which is
              produced in only a few factories in Turkey, because it has one of
              the best machines in the world with real cold-pressed olive oil
              technology. As the Palamidas brand, we use this technology to
              obtain quality oil from both the crops of our own gardens and the
              local people's own crops. Palamidas produces real cold-pressed
              olive oil and uses 300 acres of olive groves in the Akhisar region
              only, not buying olives or olive oil from outside this region.
            </p>
          </div>
          <div className="image">
            <img src="https://via.placeholder.com/500x600" alt="Placeholder" />
          </div>
        </div>
        <div className="next-gen-info container mx-auto grid grid-cols-2 justify-center">
          <div className="image">
            <img src="https://via.placeholder.com/500x600" alt="Placeholder" />
          </div>
          <div className="info text-left space-y-4 mt-8">
            <p className="text-4xl font-semibold">
              100% Cold Pressed Extra Virgin Olive Oil
            </p>
            <div className="numbers flex justify-between w-8/12">
              <div className="flex flex-col peroxide">
                <p className="text-3xl font-semibold text-green-700">12.89</p>
                <p>Peroxide</p>
              </div>
              <div className="flex flex-col acidity">
                <p className="text-3xl font-semibold text-green-700">Max 0.5</p>
                <p>Acidity</p>
              </div>
            </div>
            <p className="leading-relaxed">
              Cold-Pressed Olive Oil, are olive grains collected and bored from
              Akhisar in September/October when they are not yet fully ripe.
              Since it is pressed in October, it is rich in antioxidant
              properties found in the olive fruit and polyphenols that reduce
              the risk of cancer. Cold-press is obtained by the cold tightening
              technique, keeping it at a maximum of 27 °C, in order to obtain
              more than the polyphenol we are most looking for in olive oil. We
              are happy to have Cold-Pressed Akhisar Olive Oil to reach you
              firsthand.
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-2 info text-center">
          <p className="text-lg font-semibold">
            One of the largest Turkish table olives and Turkish olive oil
            company...
          </p>
          <p className="text-5xl font-semibold">
            Health and flavour in every drop...
          </p>
          <p className="w-6/12 mx-auto">
            We classify the oils obtained by the carefully processing of Domat,
            Uslu, Tirilye and Edremit olives in the Akhisar / Turkish Aegean
            region to their chemical and sensory properties, and present our
            gardens with the highest quality olive oils with the Palamidas
            brand.
          </p>
        </div>
        <div className="next-gen-info container mx-auto grid grid-cols-2 justify-center">
          <div className="image">
            <img src="https://via.placeholder.com/500x600" alt="Placeholder" />
          </div>
          <div className="info text-left space-y-4 mt-8">
            <p className="text-4xl font-semibold">100% SOLAR ENERGY...</p>
            <p className="text-2xl">
              Environmentally Friendly Olive Oil Factory
            </p>
            <p className="leading-relaxed">
              Cold-Pressed Olive Oil, are olive grains collected and bored from
              Akhisar in September/October when they are not yet fully ripe.
              Since it is pressed in October, it is rich in antioxidant
              properties found in the olive fruit and polyphenols that reduce
              the risk of cancer. Cold-press is obtained by the cold tightening
              technique, keeping it at a maximum of 27 °C, in order to obtain
              more than the polyphenol we are most looking for in olive oil. We
              are happy to have Cold-Pressed Akhisar Olive Oil to reach you
              firsthand.
            </p>
          </div>
        </div>
      </main>

      <footer>
        <nav className="mx-4 flex items-center justify-between">
          <p>
            ONE OF THE LARGEST TABLE OLIVES & TURKISH OLIVE OIL EXPORTER FROM
            AEGEAN
          </p>
          <ul className="py-4 flex justify-end flex-row space-x-4">
            <li>FB</li>
            <li>TW</li>
            <li>INS</li>
            <li>WHA</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
