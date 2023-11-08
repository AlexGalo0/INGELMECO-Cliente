import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1E1E] fixed-bottom ">
      <hr className="my-3  sm:mx-auto border-gray-700 " />

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                alt="Logo INGELMECO"
                src="/images/logo.png"
                width={210}
                height={51}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="mb-6 text-sm font-semibold  uppercase text-white">
                Tienda Online
              </ul>
              <ul className=" text-gray-400 font-medium">
                <Link href="/productos">
                  <li className="hover:underline">Productos</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Perfil de la Empresa
              </h2>
              <ul className="text-gray-400 font-medium">
                <Link href="/">
                <li className="hover:underline">Sobre Nosotros</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Contactanos
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    ventas@ingelmeco.com
                  </a>
                </li>
                <div className="flex items-center">
                  <li className="">
                    <a href="#" className="hover:underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.570-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.470-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.200-.296.300-.495.099-.198.050-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.510l-.570-.010c-.198 0-.520.074-.792.372s-1.040 1.016-1.040 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.200 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.360.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.290.173-1.414z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/p/Ingenieria-Electrica-Mecanica-y-de-Construccion-100066811322847/?locale=es_LA"
                      className="hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              INGELMECO
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
