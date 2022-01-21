import Card from '../components/Card';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <header className="font-bold">My recovery</header>
        <div className="">
          Phasellus nec rhoncus turpis, id lacinia nisi. Quisque at turpis et
          dui pretium mattis non iaculis ligula. Fusce vel ligula pretium,
          blandit turpis ut, finibus nunc. Morbi vitae purus euismod, tempus
          nisi nec, eleifend sem. Praesent rutrum dictum metus et vestibulum.
          Etiam pellentesque dignissim ultrices.
        </div>
        <Image
          className="img"
          src={
            'https://www.voicesofyouth.org/sites/voy/files/styles/blog_teaser/public/images/2021-06/90cebc77-9311-4ab0-94d4-08fe091fd9a6.jpeg?h=11324c79&itok=cHF-4uoG'
          }
          alt={''}
          width={500}
          height={500}
        />
        <Card />
      </div>
    </>
  );
};

export default Home;
