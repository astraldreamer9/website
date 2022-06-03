/** @jsx jsx */
import { jsx, Container, Box, Button } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/astradreamer/metaverse.gif';
//import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: '',
  title: 'About',
  description:
    'We are a team of digital creators. Our focus is interactive & immersive experience design. We have been working in the field of art & design for as long as we can remember. However, it wasn’t until the beginning of 2021, that we decided to travel deeper into the world of new media art.',
  description2:
    'When Facebook changed its name to Meta, together we became inspired to explore new ways for interactivity. This has been by far one of our most special projects, because it allows us to create a new user experience. We like to think of those new systems as a way for us to connect to something universal while questioning reality at the same time. We are excited for you to join us as we launch our first NFT collection. Buckle up as we take a mind trip...',
  btnName: "Join community",
  btnURL: "https://discord.gg/Jv78PKNgfq",
};

export default function About() {
  return (
    <section sx={{ variant: 'section.about' }} id="about">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
        
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            description2={data.description2}
           // btnName={data.btnName}
          //  btnURL={data.btnURL}
          />
          {/**
        <a href="https://discord.gg/Jv78PKNgfq" target="_blank">
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
          >
            Join Community
          </Button>
        </a> 
         */}
        </Box>
       
 
          
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            {/** <Image src={shapePattern} alt="Shape" /> */}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    color: '#92a8d1',
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['10px', '20px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      //zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    //zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
