import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://i.ibb.co/3hsmg0J/charles-deloye-2-Rou-MSg9-Rnw-unsplash.jpg",
    "https://i.ibb.co/PhKxzTf/emmanuel-offei-b-Orjvtn7a-Y0-unsplash.jpg",
    "https://i.ibb.co/rGHYzVd/good-free-photos-YZsv-Ns2-GCPU-unsplash.jpg",
    "https://i.ibb.co/qmJ6zfv/joshua-hoehne-igg-WDx-HTAUQ-unsplash.jpg",
    "https://i.ibb.co/CWvqnwx/leon-wu-LLf-RMRT-9-AY-unsplash-1.jpg",
    "https://i.ibb.co/qj9K39t/leon-wu-LLf-RMRT-9-AY-unsplash.jpg",
    "https://i.ibb.co/vLhFm3g/md-duran-1-Vq-HRwxc-CCw-unsplash.jpg",
    "https://i.ibb.co/mN1N9KK/pang-yuhao-kd5cxw-ZOK4-unsplash.jpg",
    "https://i.ibb.co/Ht4gJXm/rut-miit-YIdk-Wyn-Jd-Sk-unsplash.jpg",
    // "https://i.ibb.co/BTS49dZ/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg"
    ]

const ImageGallery = () => {
    return (
        <section className="mt-10 mb-10 pt-10 pb-10  border-t-4 rounded-3xl border-[#adb1ab] bg-[#E9F2E7] ">
        <h2 className="text-3xl font-bold text-center pb-4">Graduation Image</h2>
        <div className="p-10 ">
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                
            >
                <Masonry gutter="20px ">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>

        </section>
    );
};

export default ImageGallery;