export default function AboutBottomPicturersComponent() {
  let picturers = [
    {
      src: "https://media-exp1.licdn.com/dms/image/C4D03AQHc4WsCx9L49g/profile-displayphoto-shrink_800_800/0/1642848341301?e=1675900800&v=beta&t=zsPVh-6P9zqLuRgJuiv3_RvaN1DE8HGq6TjKr4ZkMgE",
      alt: "liel pics",
    },
    {
      src: "https://media-exp1.licdn.com/dms/image/C4D03AQHc4WsCx9L49g/profile-displayphoto-shrink_800_800/0/1642848341301?e=1675900800&v=beta&t=zsPVh-6P9zqLuRgJuiv3_RvaN1DE8HGq6TjKr4ZkMgE",
      alt: "liel pics",
    },
    {
      src: "https://media-exp1.licdn.com/dms/image/C4D03AQHc4WsCx9L49g/profile-displayphoto-shrink_800_800/0/1642848341301?e=1675900800&v=beta&t=zsPVh-6P9zqLuRgJuiv3_RvaN1DE8HGq6TjKr4ZkMgE",
      alt: "liel pics",
    },
  ];
  const ShowPictures = () => {
    for (let i = 0; i < picturers.length; i++) {
      <div>
        <img src={picturers[i].src} alt={picturers[i].alt} />
      </div>;
    }
  };

  return (
    <section className="AllPicturers">
      <div>{ShowPictures()}</div>
    </section>
  );
}
