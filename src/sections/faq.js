import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: true,
    title: 'Why “Astral Dreamers?”',
    contents: (
      <div>
        Well as the old saying goes: “Monkey see, monkey do.” Aren’t you tired of seeing monkeys, gorillas, & apes at the forefront of this movement?! No offense to those that come with great utilities, but we wanted to do something unseen. People are starting to realize that NFTs are more than just digital art, but they can be keys to unlocking exclusive content. Astral Dreamers is more than a community hiding behind cartoon art. Our community is made up of real estate agents/investors, lawyers, authors, book editors, business owners, mental health experts, videographers, developers, & artists. Join us over on our discord, where we discuss investment strategies, self development tips, the future of crypto & NFTs, community projects, astral projection, or to simply just to be surrounded by a great network.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Where can I buy?',
    contents: (
      <div>
        The Astral Dreamers are available for purchase on Bubblehouse. They can be purchased directly with a debit/credit card or with your Paypal address. You can also purchase the NFTs on Opensea directly through your MetaMask wallet via the Polygon (MATIC) Blockchain. Just be sure that your MetaMask wallet is configured for the MATIC network. prior to purchase.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How much are the avatars?',
    contents: (
      <div>
        The Astral Avatars floor price will be $1 a piece. We want to build community.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How many Astral Dreamer NFTs are there?',
    contents: (
      <div>
        There are 9 unique NFTs that will be available in the collection for purchase. Each Avatar will serve as a token, which will grant access to the DAO.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How many Avatars can I purchase?',
    contents: (
      <div>
        We wanted to make the Astral Dreamers accessible to as many collectors as possible, so we ask that you help us spread the word. The number of avatars you can purchase will not be limited. In fact, if you collect all 9 Dreamers you'll be entered into a crypto giveaway 0.0025 BTC ~ $100USD
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What’s next for Astral Dreamers?',
    contents: (
      <div>
        Utility: METAVERSE-ready avatars, free NFTs, a book club, monthly zoom meetings, a DAO, weekly discord meetings, merch, e-book authoring, royalties, donating to charities, annual conferences, a hybrid-metavere, & access to one of the dopest communities out there.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    //<section sx={{ variant: 'section.faq' }} id="faq">
    <Box id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="FAQs"
          heading="What are some of your curiosities?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
   // </section>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '1366px',
      alignItems: 'center',
      fontSize: 32,
      color: 'white',
      justifyContent: 'space-between',
      pb: [0, 7, 0, null, 0],
      mt:10,
    },
    blockTitle: {
      marginBottom: [25, null, 25,null, 25,65, 65],
      textAlign: 'center',
      fontSize: 32,
      color: 'white',
    },
  },
};